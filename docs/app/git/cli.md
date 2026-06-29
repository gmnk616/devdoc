---
sidebar_position: 2
---

# CLI

ここで記載しているコマンドは基本的にカレントディレクトリに`.git`が存在するものとします。  

## github CLI

```bash title="githubのログイン(要 ブラウザによる認証)"
gh auth login -w -p https 
```

## git config

### 設定の一覧表示

```bash
git config -l
```

<details>
  <summary>使用例</summary>

```bash
$ git config -l
safe.directory=*
credential.helper=store
alias.tree=log --graph --all --pretty=format:'%x09%C(auto) %h %Cgreen %ar %Creset%x09by"%C(cyan ul)%an%Creset" %x09%C(auto)%s %d'
init.defaultbranch=main
user.name=gmnk
user.email=maqt01476497@gmail.com
```

</details>

### safe.directory

以下コマンドでgitの脆弱性対策を`off`にしてます。(開発用以外は`off`にしない方が望ましいです。)

```bash
git config --global safe.directory '*'
```

### credential.helper

以下コマンドで初回時以降はユーザー名とパスワードの入力が省略されます(gitlab等)

```bash
git config --global credential.helper store
```

## git log

### ログを確認

コミットログを表示します。  

```bash
git log [ログの出力数]
```

<details>
  <summary>使用例(ログを3つ出力)</summary>

```bash
git log -3
```

</details>

### ログをグラフ表示(推奨)

コミットログをグラフ表示します。  
[参考サイト](https://qiita.com/kawasaki_dev/items/41afaafe477b877b5b73)  

```bash
git log --graph --all --pretty=format:'%x09%C(auto) %h %Cgreen %ar %Creset%x09by"%C(cyan ul)%an%Creset" %x09%C(auto)%s %d'
```

:::info
長いコマンドである為、以下コマンドでgitエイリアスを追加することを推奨します。  

```bash title="Linux(エスケープシーケンスに'\\'を使用)"
git config --global alias.tree "log --graph --all --pretty=format:'%x09%C(auto) %h %Cgreen %ar %Creset%x09by"\"%C(cyan ul)%an%Creset\" %x09%C(auto)%s %d'"
```

```powershell title="WWindows(エスケープシーケンスに'ダブルクォーテーション'を使用)"
git config --global alias.tree "log --graph --all --pretty=format:'%x09%C(auto) %h %Cgreen %ar %Creset%x09by""%C(cyan ul)%an%Creset"" %x09%C(auto)%s %d'"
```

gitエイリアス追加後は、以下コマンドでグラフ表示が可能です。  

```bash
git tree
```

:::

## git clone

カレントディレクトリ(`/home/goma/`)に`main`ブランチをcloneする場合のコマンドは以下の通りです。  
`-b`オプションはブランチ名を指定する際に使用します。  
`-b`を省略時はHEADブランチになります。  

```bash
git clone -b main https://github.com/gmnk616/devdoc.git
```

`/home/goma/pv-devdoc`に`main`ブランチをcloneする場合のコマンドは以下の通りです。  
(ディレクトリ名は`/home/goma/pv-devdoc`になります。)  

```bash
git clone -b main https://github.com/gmnk616/devdoc.git /home/goma/setup-wslenv
```

## git init

現在のディレクトリまたは指定したディレクトリに`「.git」というリポジトリを構成するディレクトリ`を作成するコマンド  
  
カレントディレクトリに`.git`を作成

```bash
git init
```

指定したディレクトリに`.git`を作成  

```bash
git init /home/goma/testgit/
```

## git add

以下コマンドで以下項目がステージング対象となります。  
**<font coler="red">基本的に以下`-A`オプションの使用を推奨します</font>**
  
- 変更されたファイル
- 削除されたファイル
- 名前変更されたファイル
- 新しく作られたファイル

```bash
git add -A
```

以下コマンドで以下項目がステージング対象となります。  

- 変更されたファイル
- 削除されたファイル

```bash
git add -u
```

## git status

`git add`したファイル一覧の確認等に使用します。  

```bash
git status
```

## git commit

### コミット

`git add`したファイル一覧のコミットに使用します。  
`-m`オプションはコメントです。  

```bash
git commit -m "初回登録"
```

以下のように`-m`オプションを省略すると、コメント入力にデフォルトのエディタが起動します。  
**<font color="red">改行付のコメント入力時は以下を推奨</font>**  

```bash
git commit
```

コメント入力画面(画面は`nano`)でハイライト表示箇所が追加したコメントです。  
`nano`の場合コメント入力後に`Ctrl` + `X`を入力して、  
`Save modified buffer?`で`y(Y)`を入力して`Enter`キーを選択するとコメントが入力されます。  

```bash
TODO: 現在記載中です
```

### 直前コミットのコメントを修正

```bash
git commit --amend -m "コメント"
```

:::tip
前のコメントをpush済の場合は`-f`オプション付きで強制的にプッシュ  
(極力push前に修正できるのが望ましいです。)  

```bash
git push -f
```

:::

## git remote

### リモートリポジトリ追加

`git push`する前に実行する必要があるコマンドです。  
カレントディレクトリの`.git`に`リモートリポジトリ`と`追加したいリポジトリ`が追加されます。  
**<font color="red">一度追加すれば以降は`git remote add`しなくても`git push`が可能になります</font>**  

```bash
git remote add [追加するリモートリポジトリ名] [追加したいリポジトリ]
```

コマンドの具体例は以下になります。  

```bash
git remote add origin https://github.com/gmnk616/devdoc.git
```

### リモートリポジトリ詳細

```bash
git remote -v
```

## git push

```bash
git push [作成したリポジトリ名] [ブランチ名]
```

コマンドの具体例は以下になります。  

```bash
git push origin main
```

`--set-upstream`オプションについて
今いるローカルブランチに`upstream（追跡先のリモートブランチ）`が設定されていないときに以下コマンドを求められることがあります。

```bash
git push --set-upstream origin `branch-name`
```

毎回 -u を打たなくて済む設定
新規ブランチの初回 push で自動的に upstream を設定したいなら
以下コマンドを実施

```bash
git config --global push.autoSetupRemote true
```

## git fetch

```bash
git fetch
```

リモートに存在しないブランチをローカルから取り除く場合は、`-p`("prune"取り除く)を付けます。  

```bash
git fetch -P
```

全てのリモートリポジトリから最新の変更をローカルリポジトリに取得

```bash
git fetch --all
```

## git branch

### ブランチを作成(現在のカレントブランチに作成)

```bash
git branch [ブランチ名]
```

### ローカル&リモートブランチ一覧を表示

```bash
git branch -a
```

### 現在のブランチを確認

```bash
git branch --contains
```

### ブランチを削除

```bash
git branch -d [ブランチ名]
```

push, mergeされていないブランチを強制的に削除したい場合は、代わりに`-D`オプションを使用します  

```bash
git branch -D [ブランチ名]
```

### 作成したブランチ名を変更

```bash title="作成したmasterブランチをmainに変更"
git branch -m master main
```

## git checkout

gitブランチ(カレントブランチ)を切り替えます  

```bash
git checkout [ブランチ名]
```

<details>
  <summary>使用例(ログを3つ出力)</summary>

以下`master`ブランチがカレントブランチの状態で、`develop`ブランチをカレントブランチにする例を示します  

```bash
# 現在のカレントブランチを確認
$ git branch --contains
  develop
* master

# カレントブランチをdevelopに切替
$ git checkout develop
Switched to branch 'develop'

# カレントブランチがdevelopに切り替わったことを確認
$ git branch --contains
* develop
  master
```

</details>

一例

```bash
# 対象ブランチにcheckout
git checkout sample-test

# ブランチを元に戻す（ここではdevelop)
git checkout develop

# 対象ブランチのworktreeを作成
git worktree add ../sample-test sample-test
```

## git merge

### fast forwardあり

```bash
git merge [ブランチ名]
```

<details>
  <summary>developの内容をmainにマージ</summary>

TODO:記載中
</details>

### fast forwardなし

```bash
git merge --no-ff [ブランチ名]
```

<details>
  <summary>developの内容をmainにマージ</summary>

TODO:記載中
</details>

## git rebase

```bash title="feature/xxxxxにdevelopブランチの内容をリベース"
git rebase develop feature/xxxxx
```

リベース時のコンフリクトが解消された場合は以下コマンドでリベースの続きを実施  
(衝突が発生した際は都度対応する)

```bash
git rebase --continue
```

リベース済みのブランチをpushする(`-f`オプションが必要)

```bash
git push origin feature/xxx -f
```

## git tag

タグ一覧を表示

```bash
git tag
```

## git リモートブランチを削除

```bash
git push --delete origin branch_name
# 例
git push --delete origin feature/sample-test
```

## git worktree

ここでは一例を示します。

```bash
## 現在の位置からgitブランチ(ここではfeature/test)を作成
git branch feature/test

## feature/test用のワークツリーを作成
git worktree add ../feature/test feature/test

## 用のワークツリーを削除
git worktree remove ../feature/test

## リモートに存在しないブランチをローカルで削除
git fetch -p

## 作業終了後にローカルブランチ(feature/test)を削除
git branch -D feature/test

## ワークツリーの場所を移動した場合の修復(このコマンドは見直しが必要かも)
git worktree repair ../feature/test

## ワークツリーの path を変更する(以下例の場合、`../feature/test`を`../feature/test2`に変更する)
git worktree move ../feature/test ../feature/test2
```

## git sqush

ここでは一例を示します。

```bash
# ベースのブランチを指定(ここではdevelop)
git reset --soft develop
# コミット時のコメントを指定する
git commit -m "サンプルコメント"
```

## git stash

参考サイトを以下に示します。  
[【Git】stashコマンドのまとめと使い方 〜変更差分の一時退避〜](https://qiita.com/nakaji0210/items/330f6dcb361da074c2c0)  
[【git】git stashの使い方](https://zenn.dev/harupyade/articles/cbb5c70cd705be)  

```bash
# 変更を破棄
git stash -u

# 退避した作業の一覧を見る
git stash list
stash@{0}: WIP on test: xxxx
stash@{1}: WIP on commit-sample: xxxx

# 退避した作業を戻す(addしていた変更もaddされていない状態で戻る)
git stash apply stash@{0}
# 退避した作業を戻す(addした状態にそのままに戻る)
git stash apply stash@{0}

# 退避した作業を消す
git stash drop stash@{0}
# 退避した作業を基に戻すと同時に、stashのリストから消す
git stash pop stash@{0}
```

## git reflog(現在のHEADブランチを調べる)

```bash
git reflog [ログの出力数]
```

```bash title="使用例"
$ git reflog -3
4669055 (HEAD -> main, origin/main, origin/HEAD) HEAD@{0}: checkout: moving from main to main
4669055 (HEAD -> main, origin/main, origin/HEAD) HEAD@{1}: branch: Reset to remotes/origin/main
4669055 (HEAD -> main, origin/main, origin/HEAD) HEAD@{2}: checkout: moving from main to main
```

## gitのコミットハッシュ関連

```bash title="gitのコミットハッシュを取得"
git show --format='%H' --no-patch
```

```bash title="指定したコミットハッシュの詳細を表示"
git show <コミットハッシュ値>
```
