---
title: Button
permalink: /controls/button
categories: [控件, 文本与输入]
---

# Button 按钮

`Button` 是可点击的交互控件，继承 `TextBlock` 的文本属性，并通过事件执行操作。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `text` | 按钮文字。 |
| `background` | 按钮背景颜色或纹理。 |
| `fontForeground` | 按钮文字颜色。 |
| `clickable` | 是否允许点击。 |
| `events.click` | 点击时执行的脚本。 |

## 示例

```yaml
layout:
- !Button
  name: 确认按钮
  text: 确认
  width: 120
  height: 40
  clickable: true
  events:
    click: |-
      Chat.send("按钮被点击了！")
```

[返回控件总览](../index.md)
