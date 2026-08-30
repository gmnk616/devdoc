---
sidebar_position: 1
---

# Mac

## Homebrew のインストール

macOS でパッケージ管理を行う場合は、Homebrew を利用する方法が一般的です。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

インストール後、以下を実行して利用できることを確認します。

```bash
brew --version
```

## zsh の基本設定

macOS のデフォルトシェルは zsh です。よく使う設定を追加します。

```bash
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

## 画面キャプチャ

スクリーンショットを撮影する場合は、`Command + Shift + 3` や `Command + Shift + 4` を使います。

- 全画面を撮影: `Command + Shift + 3`
- 範囲を指定して撮影: `Command + Shift + 4`
- ウィンドウを指定して撮影: `Command + Shift + 4` の後に `Space`

## リモート接続

SSH で接続する場合は、以下のように実行します。

```bash
ssh user@hostname
```

## 参考リンク

- [Apple サポート - Mac の使い方](https://support.apple.com/ja-jp/macos)
- [Homebrew](https://brew.sh/)
