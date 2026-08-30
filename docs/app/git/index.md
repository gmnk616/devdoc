---
sidebar_position: 1
---

# git

[公式サイト](https://git-scm.com/)  
[リポジトリ](https://git.kernel.org/pub/scm/git/git.git)  
[Git コマンドリファレンス（日本語版）](https://tracpath.com/docs/)  

## Git for Windows アップデート手順

```powershell title="gitバージョンアップ(Windows)"
git update-git-for-windows
```

```bash title="git configでデフォルトのブランチを変更する"
git config --global init.defaultBranch main
```

## mac版 インストール手順

まず以下コマンドを入力します。

```bash
git --version
```

すると以下ダイアログが表示されるので、`インストール`を選択します
（恐らく`Command Line Tools使用許諾契約`のような画面が出ます。）  
![git_install_warning](/img/app/git/index/git_install_warning.png)

そのあとは以下画面が出て暫く待ちます  
![software_download](/img/app/git/index/software_download.png)
