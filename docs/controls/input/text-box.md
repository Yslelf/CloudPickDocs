---
title: TextBox
permalink: /controls/text-box
categories: [控件, 文本与输入]
---

# TextBox 文本框

`TextBox` 用于接收和编辑文本，继承 `TextBlock` 的显示属性，并增加输入和文本变化事件。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `text` | 当前文本。 |
| `placeholder`、`placeholderBrush` | 未输入时的提示文字及颜色。 |
| `inputType` | `Text` 或 `Password`。 |
| `inputFilters` | 输入过滤器数组。 |
| `cursorVisible` | 是否显示输入光标。 |
| `events.textChanged` | 文本发生变化时执行的脚本。 |

## 示例

```yaml
layout:
- !TextBox
  name: 用户名输入框
  placeholder: 请输入用户名
  width: 200
  height: 30
  inputFilters:
  - NoSpaces
  events:
    textChanged: |-
      Chat.send("输入内容: " + self.text)
```

[返回控件总览](../overview.md)
