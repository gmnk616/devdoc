---
sidebar_position: 4
---

# yarn

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

yarnでパッケージ管理を行う場合、`package.json`と`yarn.lock`が必要になります。  
  
:::info
yarnには`yarn v1系`と`yarn berry(V2～V4)系`の2種類があります。  
大きな違いとして以下があります。  

- `V1系`より`berry系`の方がパッケージインストールの速度が速い
- `V1系`より`berry系`の方がインストールしたパッケージのサイズが小さい
- `berry系`は依存パッケージを`node_modules`ディレクトリ配下に実体をダウンロードせず`pnp.cjs`、`pnp.locker.mjs`というファイルで管理する仕様(※)  

(※)但し.yarnrc.ymlの設定で従来通り`node_modules`ディレクトリ配下に実体をダウンロードすることも可能です。  
:::

## 参考

[公式サイト](https://yarnpkg.com/)  
[公式サイト(CLI)](https://yarnpkg.com/cli)  
[公式サイト(Configuration)](https://yarnpkg.com/configuration/manifest)  
[yarn v1系(github)](https://github.com/yarnpkg/yarn)  
[yarn berry系(github)](https://github.com/yarnpkg/berry)  
[yarnをv1からv2(Berry)へ移行する](https://zenn.dev/kkoudev/articles/5b440e1e341458)  
[プロジェクトを壊さず安全に npm から yarn4 へ移行する](https://zenn.dev/wakamsha/articles/migrate-from-npm-to-yarn)  

## 環境変数名について

:::danger
`berry系のyarn`では、環境変数名に`YARN_***`を使用するのは厳禁です。  
`YARN_***`を使用すると`yarn install`等で以下のようなエラーが発生します。  

```bash
Unrecognized or legacy configuration settings found...
```

[参考(英語サイト)](https://www.brianlim.ca/2022/07/yarn-2-and-yarn-3-unrecognized-or.html)
:::

## バージョン確認

```bash
yarn -v
```

## nodejs初期化

```bash
yarn init
```

## packageインストール

カレントディレクトリに`package.json`(あれば`package-lock.json`)が存在する状態で、  
以下コマンドを入力(どちらでも可能)  

```bash
yarn install
```

```bash
yarn
```

## packageクリーンインストール

カレントディレクトリに`package.json`(あれば`package-lock.json`)が存在する状態で、  
以下コマンドを入力

<Tabs>
<TabItem value="berry" label="berry">

```bash
yarn install --immutable --immutable-cache --check-cache
```

</TabItem>
<TabItem value="v1" label="v1">

```bash
rm -rf node_modules && yarn install --frozen-lockfile
```

</TabItem>
</Tabs>

## packageインストールリスト

<Tabs>
<TabItem value="berry" label="berry">

```bash
yarn info --recursive --dependents
```

</TabItem>
<TabItem value="v1" label="v1">

```bash
npm yarn list
```

</TabItem>
</Tabs>

## package個別インストール

インストール時に`package.json`の`dependencies`or`devDependencies`にパッケージ名とバージョンが記載されます。  
(`yarn.lock`も更新されます。)  

```json title="package.json"
  "dependencies": {
    <パッケージ名>: <バージョン>,
  },
  "devDependencies": {
    <パッケージ名>: <バージョン>,
  }
```

### `^付き`

<Tabs>
<TabItem value="main" label="main">

```bash
yarn add <パッケージ名>
```

```bash title="コマンド例"
yarn add express
```

インストール後(パッケージ名の後ろにバージョンを指定しない場合は最新のバージョンを取得します)  

```json title="package.json"
  "dependencies": {
    "express": "^4.17.1",
  },
```

</TabItem>
<TabItem value="dev" label="dev">

```bash
yarn add --dev <パッケージ名>
```

```bash title="コマンド例"
yarn add --dev prettier
```

インストール後(パッケージ名の後ろにバージョンを指定しない場合は最新のバージョンを取得します)  

```json title="package.json"
  "devDependencies": {
    "prettier": "^3.3.3",
  },
```

</TabItem>
</Tabs>

### `^無し`バージョン指定

<Tabs>
<TabItem value="main" label="main">

```bash
yarn add <パッケージ名>@<version>
```

```bash title="コマンド例"
yarn add express@4.17.1
```

インストール後

```json title="package.json"
  "dependencies": {
    "express": "4.17.1",
  },
```

</TabItem>
<TabItem value="dev" label="dev">

```bash
yarn add --dev <パッケージ名>@<version>
```

```bash title="コマンド例"
yarn add --dev prettier@3.3.3
```

インストール後

```json title="package.json"
  "devDependencies": {
    "prettier": "3.3.3",
  },
```

</TabItem>
</Tabs>

## packageアンインストール

:::info
npmと異なり`package.json`の`dependencies`もしくは`devDependencies`も削除されます。  
(`yarn.lock`も更新されます。)  
:::

```bash
yarn remove <パッケージ名>
```

```bash title="コマンド例"
yarn remove express
yarn remove prettier
```

## `corepack use`コマンド

`corepack use`コマンドで`package.json`の`packageManagerフィールド`に利用するパッケージマネージャーを指定します。  
以下では利用するパッケージマネージャーに`yarn`を指定するコマンドを紹介します。  

:::caution
利用するパッケージマネージャーに`yarn`を指定した場合、  
`yarn`以外のパッケージマネージャー(`npm`, `pnpm`)を使用するとエラーとなります。  
:::

`package.json`の`packageManagerフィールド`に`yarn`を追加するコマンドは以下の通りです。  
(SHA-512ハッシュを含むバージョンが追加されます)  

```bash
corepack use yarn@{YARN_VER}
```

<details>
  <summary>コマンド例</summary>

`yarn`の`4.5.1`を`package.json`の`packageManagerフィールド`に追加

```bash
corepack use yarn@4.5.1
```

コマンド実行後の結果

```bash title="package.json"
  ...
  "packageManager": "yarn@4.5.0+sha512.837566d24eec14ec0f5f1411adb544e892b3454255e61fdef8fd05f3429480102806bac7446bc9daff3896b01ae4b62d00096c7e989f1596f2af10b927532f39"
```

</details>

## パッケージを最新にupgrade

<Tabs>
<TabItem value="berry" label="berry">

:::info
このコマンドは対話的に全パッケージのverを最新版に更新します。
:::

```bash title="パッケージのバージョンアップ"
yarn upgrade-interactive
```

</TabItem>
<TabItem value="v1" label="v1">

:::caution
このコマンドは全パッケージのverを最新版に更新します。
:::

```bash
npm upgrade --latest
```

</TabItem>
</Tabs>
