---
sidebar_position: 1
---

# Windows

## TEMPフォルダの場所

システムフォルダ下のtempフォルダ[^1]  

```run
%systemdrive%\Windows\Temp
```

[^1]: 初回時は`このフォルダーにアクセスする許可がありません`というダイアログが表示されますので、`続行`ボタンを選択します  
  
ユーザーごとのプロファイルフォルダ下のtempフォルダ

```run
%userprofile%\AppData\Local\Temp
```
