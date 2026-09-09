---
title: Border
permalink: /controls/border
categories: [控件, 布局容器]
---

# Border 边框容器

`Border` 用于在一个子控件周围绘制背景、边框和圆角，常用于制作面板和内容分组。

## 关键属性

| 属性 | 说明 |
| --- | --- |
| `borderThickness` | 边框厚度。 |
| `borderBrush` | 边框颜色或纹理。 |
| `cornerRadius` | 圆角半径。 |
| `background` | 背景颜色或纹理。 |
| `padding` | 边框与内容之间的距离。 |
| `child` | 唯一的直接子控件。 |

## 示例

```yaml
layout:
- !Border
  borderThickness: 2
  borderBrush: White
  cornerRadius: 5
  padding: "8, 8, 8, 8"
  background: 0x80000000
  child:
  - !TextBlock
    text: 面板内容
```

[返回控件总览](../overview.md)
