---
sidebar_position: 1
---

# github

[公式サイト](https://github.com/)  
[GitHub Docs（日本語版）](https://docs.github.com/ja)  

## インストール(windows)

`winget`を使用しますので、インストールされてない場合はインストールしてください  

まず正しいパッケージ ID を確認します。

```powershell title="powershell"
winget search GitHub.cli
```

インストール

- `--id GitHub.cli` … パッケージ ID を指定
- `-e`（`--exact`）… ID の完全一致で検索（別パッケージの誤インストール防止）

```powershell title="powershell"
winget install --id GitHub.cli -e
```

ライセンス同意を自動で済ませたい場合は、以下のオプションを付けます。

```powershell title="powershell"
winget install --id GitHub.cli -e --accept-package-agreements --accept-source-agreements
```

インストール後、PATH を反映させるためにターミナル（PowerShell）を開き直してから確認します。

```powershell title="powershell"
gh --version
```

`gh` を使う前に、GitHub アカウントとの認証を行います。

```powershell title="powershell"
gh auth login
```

1. GitHub.com か GitHub Enterprise か → 通常は `GitHub.com`
1. プロトコル → `HTTPS` 推奨
1. Git の認証に gh の資格情報を使うか → `Yes`
1. 認証方法 → `Login with a web browser`（ブラウザでワンタイムコードを入力）

以下を入力して認証済みと表示されれば完了です。  

```powershell title="powershell"
gh auth status
```

**補足**更新・アンインストール

更新

```powershell title="powershell"
winget upgrade --id GitHub.cli -e
```

アンインストール

```powershell title="powershell"
winget uninstall --id GitHub.cli -e
```
