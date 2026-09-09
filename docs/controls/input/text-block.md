---
title: TextBlock
permalink: /controls/text-block
categories: [控件, 文本与输入]
---

# TextBlock 文本块

`TextBlock` 用于显示少量只读文本，也支持字体、对齐、省略、富文本和打字机效果。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `text` | 显示的文本内容。 |
| `fontSize`、`fontFamily` | 字号与字体资源。 |
| `fontForeground`、`fontBackground` | 文字前景与背景。 |
| `bold`、`italic`、`underline` | 粗体、斜体与下划线。 |
| `textAlignment` | `Left`、`Center` 或 `Right`。 |
| `maxLines`、`singleLine`、`ellipsize` | 行数和省略方式。 |
| `richTextType`、`typewriter` | 富文本类型和打字机效果。 |

## 示例

```yaml
layout:
- !TextBlock
  text: 欢迎使用云拾
  fontSize: 16
  fontForeground: 0xFFFFFFFF
  bold: true
  textAlignment: Center
```

[返回控件总览](../index.md)
