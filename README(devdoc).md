# TypeScript 7 へのアップデート検証メモ (2026-08-14)

## 経緯

`typescript` を `6.0.3` から `7.0.2` へ更新しようとしたところ、`yarn install` が以下のエラーで失敗した。

```
YN0001: │ Error: typescript@patch:typescript@npm%3A7.0.2#optional!builtin<compat/typescript>::version=7.0.2&hash=5786d5: ENOENT: no such file or directory, lstat '/node_modules/typescript/lib/_tsc.js'
```

## 原因

TypeScript 7.0.2 はネイティブ実装への全面リライトにより、npm パッケージの内部構造が旧来（`lib/tsc.js` など）から一新されている。

一方 Yarn は `typescript` パッケージに対して、`lib/tsc.js` → `lib/_tsc.js` のリネームを含むビルトインパッチ（`compat/typescript`。PnP 環境での動作互換用）をバージョンを問わず自動適用する。このプロジェクトは `nodeLinker: node-modules` を使用しているが、それでもこのパッチは適用される。

Yarn 4.16.0 時点ではこのパッチが TypeScript 7 の新しいパッケージ構造に未対応で、リネーム対象の `lib/tsc.js` が存在しないため `ENOENT` で失敗する。本来 `optional!` 指定によりパッチ失敗時はスキップされるはずだが、4.16.0 ではこの経路でインストール全体がエラー終了する。

## 検証結果

1. **Yarn 4.16.0 → 4.18.0 に更新すると `yarn install` は成功する。**
   `compat/typescript` パッチが TypeScript 7 の新構造に対応済みだったため（実機で再現・検証済み）。

2. **ただし `yarn typecheck` は別の理由で失敗する。**
   TypeScript 7 では `tsconfig.json` の `baseUrl` オプションが完全に廃止された。このプロジェクト自身の [tsconfig.json](tsconfig.json) だけでなく、`extends` している `@docusaurus/tsconfig`（Docusaurus 3.10.2 が配布する node_modules 内のパッケージ）自体が `baseUrl: "."` を使用しており、そこでもエラーになる。これは node_modules 配下の配布物であり、自プロジェクト側の修正だけでは解決できない。
   確認時点（Docusaurus 最新版 3.10.2）で `@docusaurus/tsconfig` に TypeScript 7 対応版は存在しない。

## 結論・今後の方針

現状、Docusaurus 3.10.2 は TypeScript 7 系と噛み合っていないため、`@docusaurus/tsconfig` が TS7 対応版を出すまで `typescript` は `6.0.3` のまま据え置く。

Yarn 側の `ENOENT` 問題は 4.18.0 で解消することを確認済みなので、TypeScript 7 へ上げる際はまず Yarn を 4.18.0 以上に更新すること。
