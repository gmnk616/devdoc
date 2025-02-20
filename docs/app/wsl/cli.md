---
sidebar_position: 2
---

# CLI

## WSL を更新

```powershell title="powershell"
wsl --update
```

## インストール済Distributionを表示

```powershell title="powershell"
wsl -l -v
```

## 指定したDistributionを停止

```powershell title="powershell"
wsl -t <Distribution Name>
```

<details>
  <summary>コマンド例</summary>

```powershell title="powershell"
wsl -t Ubuntu-22.04
```

</details>

## WSL の状態を確認

```powershell title="powershell"
wsl --status
```

<details>
  <summary>コマンド例</summary>

```powershell title="powershell"
PS C:\Users\qwek4> wsl --status
既定のディストリビューション: Ubuntu-22.04
既定のバージョン: 2
```

</details>

## WSLバージョン確認

```powershell title="powershell"
wsl --version
```

<details>
  <summary>コマンド例</summary>

```powershell title="powershell"
PS C:\Users\qwek4> wsl --version
WSL バージョン: 2.3.26.0
カーネル バージョン: 5.15.167.4-1
WSLg バージョン: 1.0.65
MSRDC バージョン: 1.2.5620
Direct3D バージョン: 1.611.1-81528511
DXCore バージョン: 10.0.26100.1-240331-1435.ge-release
Windows バージョン: 10.0.26100.2605
```

</details>

## 既定WSLバージョンを設定

:::info
`2024/12/15`時点でWSLのバージョンは、`2`の使用を前提としてます。
:::

```powershell title="powershell"
wsl --set-default-version <Version>
```

<details>
  <summary>コマンド例</summary>

```powershell title="powershell"
wsl --set-default-version 2
```

</details>

## 既定Distributionを設定

```powershell title="powershell"
wsl --set-default <Distribution Name>
```

<details>
  <summary>コマンド例</summary>

```powershell title="powershell"
wsl --set-default Ubuntu-22.04
```

</details>

## Distributionのアンインストール

```powershell title="powershell"
wsl --unregister <Distribution Name>
```

<details>
  <summary>コマンド例</summary>

```powershell title="powershell"
wsl --unregister Ubuntu-22.04
```

</details>

## インストール可能なDistributionを表示

```powershell title="powershell"
wsl --list --online
```

<details>
  <summary>コマンド例</summary>

```powershell title="powershell"
PS C:\Users\qwek4> wsl --list --online
インストールできる有効なディストリビューションの一覧を次に示します。
'wsl.exe --install <Distro>' を使用してインストールします。

NAME                            FRIENDLY NAME
Ubuntu                          Ubuntu
Debian                          Debian GNU/Linux
kali-linux                      Kali Linux Rolling
Ubuntu-18.04                    Ubuntu 18.04 LTS
Ubuntu-20.04                    Ubuntu 20.04 LTS
Ubuntu-22.04                    Ubuntu 22.04 LTS
Ubuntu-24.04                    Ubuntu 24.04 LTS
OracleLinux_7_9                 Oracle Linux 7.9
OracleLinux_8_7                 Oracle Linux 8.7
OracleLinux_9_1                 Oracle Linux 9.1
openSUSE-Leap-15.6              openSUSE Leap 15.6
SUSE-Linux-Enterprise-15-SP5    SUSE Linux Enterprise 15 SP5
SUSE-Linux-Enterprise-15-SP6    SUSE Linux Enterprise 15 SP6
openSUSE-Tumbleweed             openSUSE Tumbleweed
```

</details>

## Distributionのインストール

```powershell title="powershell"
wsl --install <Distribution Name>
```

<details>
  <summary>コマンド例</summary>

:::info
`<distro_name>`は`wsl --list --online`で表示されている`NAME`のものを指定します
:::

```powershell title="powershell"
wsl --install Ubuntu-24.04
```

</details>

<details>
  <summary>vhdxインストール先等</summary>

```run title="Ubuntu-22.04"
%userprofile%\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu22.04LTS_79rhkp1fndgsc
```

```run title="Ubuntu-24.04"
%userprofile%\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu24.04LTS_79rhkp1fndgsc
```

</details>
