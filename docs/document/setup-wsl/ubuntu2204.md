---
sidebar_position: 2
---

# Ubuntu-22.04

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note 前提条件

- `Windows Terminal`をインストール済
- WSLのverが`1.0.0`以上
- ユーザー名は任意の名前でOK（以下ではユーザー名を`goma`としてます）
:::

## インストール前の準備

### **<font color="DodgerBlue">wsl関連のフォルダ作成</font>**

:::info
`wsl関連のフォルダ作成`済の場合、以下手順は不要です。
:::

<details>
  <summary>wsl関連のフォルダ作成</summary>

以下コマンドを実施します。

```powershell title="powershell"
New-Item $env:USERPROFILE/winenv/wsl/exe/ubuntu2204 -ItemType Directory; New-Item $env:USERPROFILE/winenv/wsl/ubuntu2204 -ItemType Directory
```

</details>

## インストール

### **<font color="DodgerBlue">`Ubuntu-22.04`をインストール</font>**

:::tip
wslディストリビューションがインストール済の場合は以下コマンドで事前に削除します。  

```powershell title="powershell"
wsl --unregister Ubuntu-22.04
```

:::

インストールコマンドを実施します。  

```powershell title="powershell"
wsl --install Ubuntu-22.04
```

インストールコマンド実施後、`ユーザー名`と`パスワード`を入力します。  

```bash
Installing, this may take a few minutes...
Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers
// highlight-start
Enter new UNIX username: goma # ユーザー名を入力
New password: # パスワードを入力
Retype new password: # パスワードを入力
// highlight-end
passwd: password updated successfully
Installation successful!
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

Welcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.133.1-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

This message is shown once a day. To disable it please create the
/home/goma/.hushlogin file.
```

<details>
  <summary>appxをダウンロード & 解凍 & Ubuntu起動（`wsl --install`が上手く行かない場合）</summary>

`Ubuntu2204-221101.AppxBundle`を以下コマンドで`$env:USERPROFILE/winenv/wsl/exe`にダウンロードします。  

```powershell title="powershell"
Invoke-WebRequest -Uri https://aka.ms/wslubuntu2204 -OutFile $env:USERPROFILE/winenv/wsl/exe
```

`Ubuntu2204-221101.AppxBundle`を以下コマンドで解凍します。  

```powershell title="powershell"
Expand-Archive -Path $env:USERPROFILE/winenv/wsl/exe/Ubuntu2204-221101.AppxBundle -DestinationPath $env:USERPROFILE/winenv/wsl/exe/Ubuntu2204-221101
```

`Ubuntu_2204.1.7.0_x64.appx`を以下コマンドでに解凍します。  

```powershell title="powershell"
Expand-Archive -Path $env:USERPROFILE/winenv/wsl/exe/Ubuntu2204-221101/Ubuntu_2204.1.7.0_x64.appx -DestinationPath $env:USERPROFILE/winenv/wsl/exe/ubuntu2204
```

`ubuntu.exe`を起動します。  

```powershell title="powershell"
.$env:USERPROFILE\winenv\wsl\exe\ubuntu2204\ubuntu.exe
```

`ubuntu.exe`を起動、`ユーザー名`と`パスワード`を入力します。  

</details>

### **<font color="DodgerBlue">wsl.confの設定</font>**

以下を実行します。  
**<font color="red">ユーザーパスワードの入力が必要です</font>**  

`[user] - default`はリストア後にrootになる問題の対策  
`[interop] - appendWindowsPath`はWSLのコマンド保管が遅い事象の対策  
`[boot] - systemd`はWSLでsystemdを使用するのに必要な設定  

```bash
USERNAME=`whoami` && cat << EOS | sudo tee /etc/wsl.conf
[user]
default=$USERNAME
[interop]
appendWindowsPath=false
[boot]
systemd=true
EOS
```

wslディストリビューションを抜けます。  

```bash
exit
```

wslディストリビューションを停止します。  
(`systemd`を適用するためにはwslを停止(再起動)する必要があります)  

```powershell title="powershell"
wsl -t Ubuntu-22.04
```

### **<font color="DodgerBlue">ansibleインストール</font>**

wslにログインします(ユーザー名は`goma`)

```powershell title="powershell"
wsl -d Ubuntu-22.04 -u goma --cd ~/
```

以下を実行します。  
**<font color="red">ユーザーパスワードの入力が必要です</font>**  

- `pip`をインストール
- `venv`をインストール
- `venv`を活性化(pipのver`23.0`からvenv上で実行しないとエラーとなるためです。)
- `ansible`をインストール(併せて`docker`と`passlib`もインストール)
- `~/.bashrc`に`source ~/.venv/bin/activate`を追記

```bash
sudo apt update && \
sudo apt install -y python3-pip && \
sudo apt install -y python3-venv && \
source ~/.profile && \
python3 -m venv ~/.venv && \
source ~/.venv/bin/activate && \
pip install ansible && \
pip install docker && \
pip install passlib && \
echo "source ~/.venv/bin/activate " >> ~/.bashrc
```

バージョン確認を実施します

```bash title="ansibleのバージョン確認"
ansible-community --version
```

```bash title="ansible-coreのバージョン確認"
ansible --version
```

wslディストリビューションを抜けます

```bash
exit
```

<details>
  <summary>エクスポート(ansibleインストール済)</summary>

エクスポート前に`Ubuntu-22.04`ディストリビューションが起動している場合は停止させます  

```powershell title="powershell"
wsl -t Ubuntu-22.04
```

ansibleをインストール済のwslをエクスポートします

```powershell title="powershell"
wsl --export Ubuntu-22.04 $env:USERPROFILE/winenv/wsl/ubuntu2204/ansible_test.tar
```

</details>

<details>
  <summary>インポート(ansibleインストール済)</summary>

:::tip
wslディストリビューション(`Ubuntu-22.04`)がインストールされている場合は、アンインストールします

```powershell title="powershell"
wsl --unregister Ubuntu-22.04
```

:::

`Ubuntu-22.04`(ansible_test)をインポートします

```powershell title="powershell"
wsl --import Ubuntu-22.04 $env:USERPROFILE/winenv/wsl/ubuntu2204/ $env:USERPROFILE/winenv/wsl/ubuntu2204/ansible_test.tar
```

</details>

### **<font color="DodgerBlue">playbook実行</font>**

`Ubuntu-22.04`を起動します

```powershell title="powershell"
wsl -d Ubuntu-22.04 -u goma --cd ~/
```

`setup-wslenv`を`git clone`で取得します

```bash
git clone https://github.com/gmnk616/setup-wslenv.git && cd ./setup-wslenv/ubuntu2204
```

プレイブック実行します  
**<font color="red">ユーザーパスワードの入力が必要です</font>**  

```bash
ansible-playbook -i inventories/hosts.ini -l jammy playbook.yaml --diff --ask-become-pass
```

プレイブック実行後、`setup-wslenv`を削除してwslから抜けます

```bash
rm -rf ~/setup-wslenv && exit
```

wsl再起動の為、wslを停止します  

```powershell title="powershell"
wsl -t Ubuntu-22.04
```

再度ログインします

```powershell title="powershell"
wsl -d Ubuntu-22.04 -u goma --cd ~/
```

再度ログイン後、wslディストリビューションを抜けます

```bash
exit
```

## エクスポート

### **<font color="DodgerBlue">`Ubuntu-22.04`をエクスポート</font>**

エクスポート前に`Ubuntu-22.04`ディストリビューションが起動している場合は停止させます

```powershell title="powershell"
wsl -t Ubuntu-22.04
```

プレイブック実行済のwslをエクスポートします  

```powershell title="powershell"
wsl --export Ubuntu-22.04 $env:USERPROFILE/winenv/wsl/ubuntu2204/ubuntu22_04.tar
```

## インポート

### **<font color="DodgerBlue">`Ubuntu-22.04`をインポート</font>**

:::tip
wslディストリビューションがインストール済の場合は以下コマンドで事前に削除します。  

```powershell title="powershell"
wsl --unregister Ubuntu-22.04
```

:::

`Ubuntu-22.04`をインポートします

```powershell title="powershell"
wsl --import Ubuntu-22.04 $env:USERPROFILE/winenv/wsl/ubuntu2204/ $env:USERPROFILE/winenv/wsl/ubuntu2204/ubuntu22_04.tar
```

`Ubuntu-22.04`をデフォルトディストリビューションに設定します

```powershell title="powershell"
wsl --set-default Ubuntu-22.04
```
