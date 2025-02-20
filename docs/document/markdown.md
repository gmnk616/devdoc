---
sidebar_position: 2
---

# Markdown(Docusaurus)

[docusaurusの独自マークダウンについて](https://docusaurus.io/docs/markdown-features)

## 見出しについて

```md
## 見出し2です

### 見出し3です

#### 見出し4です

##### 見出し5です
```

## 見出し2です

### 見出し3です

#### 見出し4です

##### 見出し5です

## 画像データ

```md
![circle](/img/document/markdown/circle.drawio.svg)
```

![circle](/img/document/markdown/circle.drawio.svg)

```md
![square](/img/document/markdown/square.drawio.svg)
```

![square](/img/document/markdown/square.drawio.svg)

```md
![circle](/img/document/markdown/circle.drawio.svg)
![square](/img/document/markdown/square.drawio.svg)
```

![circle](/img/document/markdown/circle.drawio.svg)
![square](/img/document/markdown/square.drawio.svg)

```md
![circle](/img/document/markdown/circle.drawio.svg)
  
![square](/img/document/markdown/square.drawio.svg)
```

![circle](/img/document/markdown/circle.drawio.svg)
  
![square](/img/document/markdown/square.drawio.svg)

## 改行

行末にスペースを2つ入れると改行されます

```md
あいうえお  
かきくけこ
さしすせそ
```

あいうえお  
かきくけこ
さしすせそ

## 引用

```md
> これは引用です。
> これは引用です。これは引用です。
> > これは引用（入れ子）です
```

> これは引用です。
> これは引用です。これは引用です。
> > これは引用（入れ子）です

## 太字

```md
これは **太字** です。
```

これは **太字** です。

## 斜体

```md
これは *斜体* です。
```

これは *斜体* です。

## 太字+斜体

```md
これは ***太字+斜体*** です
```

これは ***太字+斜体*** です

## 訂正線

```md
これは ~~訂正線~~です。
```

これは ~~訂正線~~です。

## リンク

```md
[google](https://www.google.co.jp/)  
[https://www.google.co.jp/](https://www.google.co.jp/)  
```

[google](https://www.google.co.jp/)  
[https://www.google.co.jp/](https://www.google.co.jp/)  
  
:::danger
MDXのVer3(2?)以降では、以下記述(`<>`で囲む)はエラーとなる

```md
<https://www.google.co.jp/>
```

:::

## アコーディオン(詳細折り畳み要素)

```md
<details>
  <summary>test hello</summary>

test hello

</details>
```

<details>
  <summary>test hello</summary>

test hello

</details>

:::danger
MDXのVer3(2?)以降では、以下記述(`details`の後に改行を付けず`summary`を記述)はエラーとなる

```md
<details><summary>test hello</summary>

test hello

</details>
```

:::

## コードブロック

````md
```js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
}
```
````

```js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
}
```

## コードブロック(ファイル名あり)

````md
```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
}
```
````

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
}
```

## コードブロック(ハイライト表示)

ハイライト表示を行いたい箇所に対して、  
`// highlight-start`と`// highlight-end`で囲むとハイライト表示される  

````md
```js
module.exports = {
  i18n: {
    // highlight-start
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    // highlight-end
  },
}
```
````

```js
module.exports = {
  i18n: {
    // highlight-start
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    // highlight-end
  },
}
```

## コードブロック(タブ)

:::info
`import Tabs`と`import TabItem`は先頭(`見出し1`の直後)に配置することを推奨します
:::

詳細は[こちら](https://docusaurus.io/docs/markdown-features/tabs)を参照

````markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="dev" label="Dev">

```bash
echo Hello Dev
```

</TabItem>
<TabItem value="test" label="Test">

```bash
echo Hello Test
```

</TabItem>
<TabItem value="prod" label="Prod">

```bash
echo Hello Prod
```

</TabItem>
</Tabs>
````

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="dev" label="Dev">

```bash
echo Hello Dev
```

</TabItem>
<TabItem value="test" label="Test">

```bash
echo Hello Test
```

</TabItem>
<TabItem value="prod" label="Prod">

```bash
echo Hello Prod
```

</TabItem>
</Tabs>

## インラインコード

```md
これは `code` です
```

これは `code` です

## Table

```md
|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |
|  TD  |  TD  |
```

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |
|  TD  |  TD  |

```md
| ヘッダ１ | ヘッダ２ | ヘッダ３ |
| :--- | :---: | ---: |
| 左揃え１ | 中央揃え２ | 右揃え３ |
| XXXXXXXXX | XXXXXXXXX | XXXXXXXXX |
| abc | def | ghi |
```

| ヘッダ１ | ヘッダ２ | ヘッダ３ |
| :--- | :---: | ---: |
| 左揃え１ | 中央揃え２ | 右揃え３ |
| XXXXXXXXX | XXXXXXXXX | XXXXXXXXX |
| abc | def | ghi |

## Table(見出しのみ中央表示)

```md
| <center>ヘッダ１</center> | <center>ヘッダ２</center> | <center>ヘッダ３</center> |
| :--- | :---: | ---: |
| 左揃え１ | 中央揃え２ | 右揃え３ |
| XXXXXXXXX | XXXXXXXXX | XXXXXXXXX |
| abc | def | ghi |
```

| <center>ヘッダ１</center> | <center>ヘッダ２</center> | <center>ヘッダ３</center> |
| :--- | :---: | ---: |
| 左揃え１ | 中央揃え２ | 右揃え３ |
| XXXXXXXXX | XXXXXXXXX | XXXXXXXXX |
| abc | def | ghi |

## Table(改行付)

```md
| ヘッダ１ | ヘッダ２ | ヘッダ３ |
| :--- | :---: | ---: |
| あいうえお<br></br>かきくけこ | あいうえおかきくけこ | あいうえおかきくけこ |
| あいうえおかきくけこ | あいうえお<br></br>かきくけこ | あいうえおかきくけこ |
| あいうえおかきくけこ | あいうえおかきくけこ | あいうえお<br></br>かきくけこ |
```

| ヘッダ１ | ヘッダ２ | ヘッダ３ |
| :--- | :---: | ---: |
| あいうえお<br></br>かきくけこ | あいうえおかきくけこ | あいうえおかきくけこ |
| あいうえおかきくけこ | あいうえお<br></br>かきくけこ | あいうえおかきくけこ |
| あいうえおかきくけこ | あいうえおかきくけこ | あいうえお<br></br>かきくけこ |

## HTML使用

```md
<font color="red">赤色のテスト</font>
<font color="blue">青色のテスト</font>
<font color="green">緑色のテスト</font>

**<font color="red">赤色のテスト</font>**
**<font color="blue">青色のテスト</font>**
**<font color="green">緑色のテスト</font>**
```

<font color="red">赤色のテスト</font>
<font color="blue">青色のテスト</font>
<font color="green">緑色のテスト</font>

**<font color="red">赤色のテスト</font>**
**<font color="blue">青色のテスト</font>**
**<font color="green">緑色のテスト</font>**

## チェックリスト

```md
- [ ] これからやるタスク
- [x] 完了したタスク
```

- [ ] これからやるタスク
- [x] 完了したタスク

## 箇条書き

```md
- リスト(-)
  - ネスト(space)
```

- リスト(-)
  - ネスト(space)

## 番号付きリスト

```md
1. 番号リストA
    1. 番号リストA-1
    1. 番号リストA-2
1. 番号リストB
    1. 番号リストB-1
    1. 番号リストB-2
1. 番号リストC
```

1. 番号リストA
    1. 番号リストA-1
    1. 番号リストA-2
1. 番号リストB
    1. 番号リストB-1
    1. 番号リストB-2
1. 番号リストC

## 番号付きリスト(間に画像を挟む)

```md title="画像の前にスペースを1つ以上含めると連番になる"
1. テスト1  
 ![circle](/img/document/markdown/circle.drawio.svg)
1. テスト2  
 ![square](/img/document/markdown/square.drawio.svg)
1. テスト3 
```

1. テスト1  
 ![circle](/img/document/markdown/circle.drawio.svg)
1. テスト2  
 ![square](/img/document/markdown/square.drawio.svg)
1. テスト3  

## 番号付きリスト(間にコードブロックを挟む)

````md title="コードブロックの前にスペースを3つ以上含めると連番になる"
1. テスト1

   ```bash
   test
   ```

1. テスト2

   ```bash title="test2"
   test2
   ```

1. テスト3
````

1. テスト1

   ```bash
   test
   ```

1. テスト2

   ```bash title="test2"
   test2
   ```

1. テスト3

## 番号付きリスト(間にアラートボックスを挟む)

```md title="アラートボックスの前にスペースを3つ以上含めると連番になる"
1. テスト1

   :::info
   test1
   :::

1. テスト2

   :::caution
   test2
   :::

1. テスト3
```

1. テスト1

   :::info
   test1
   :::

1. テスト2

   :::caution
   test2
   :::

1. テスト3

## 番号付きリスト(間に箇条書きを挟む)

```md title="箇条書きの前にスペースを4つ以上含めると連番になる"
1. テスト1
    - 箇条書き1
1. テスト2
    - 箇条書き2
    - 箇条書き3
1. テスト3
    - 箇条書き4
    - 箇条書き5 
```

1. テスト1
    - 箇条書き1
1. テスト2
    - 箇条書き2
    - 箇条書き3
1. テスト3
    - 箇条書き4
    - 箇条書き5

## 水平線（罫線）

```md
***
```

***

## アラートボックス/Admonitions(docusaurus独自)

### Admonitions(note)

```md
:::note
Your message here.
:::
```

:::note
Your message here.
:::

### Admonitions(danger)

```md
:::danger
Your message here.
:::
```

:::danger
Your message here.
:::

### Admonitions(tip)

```md
:::tip
Your message here.
:::
```

:::tip
Your message here.
:::

### Admonitions(info)

```md
:::info
Your message here.
:::
```

:::info
Your message here.
:::

### Admonitions(caution)

```md
:::caution
Your message here.
:::
```

:::caution
Your message here.
:::

### Admonitions(original)

```md
:::note YOUR TITLE
Your message here.
:::
```

:::note YOUR TITLE
Your message here.
:::
