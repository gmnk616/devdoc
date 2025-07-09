---
sidebar_position: 2
---

# npm

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

| <center>項目</center> |
| :--- |
| [package - npm](https://www.npmjs.com/) |

## バージョン確認

```bash
npm -v
```

## nodejs初期化

```bash
npm init
```

## packageインストール

カレントディレクトリに`package.json`(あれば`package-lock.json`)が存在する状態で、  
以下コマンドを入力(どちらでも可能)  

```bash
npm install
```

```bash
npm i
```

## packageクリーンインストール

カレントディレクトリに`package.json`(あれば`package-lock.json`)が存在する状態で、  
以下コマンドを入力  

```bash
npm ci
```

## packageインストールリスト

<Tabs>
<TabItem value="local" label="local">

```bash
npm list
```

</TabItem>
<TabItem value="global" label="global">

```bash
npm list -g
```

</TabItem>
</Tabs>

## package個別インストール

### `^付き`

### `^無し`

### `^無し`バージョン指定

## packageアンインストール

## アップデート情報を確認

インストールしたパッケージに新しいバージョンが存在するかどうか確認できます  

```bash
npm outdated
```
