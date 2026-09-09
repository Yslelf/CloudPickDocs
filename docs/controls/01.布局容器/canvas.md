---
title: Canvas
permalink: /controls/canvas
categories: [控件, 布局容器]
---

# Canvas 画布容器

`Canvas` 允许通过坐标精确放置子控件，适合绘图、拖拽和固定坐标场景。普通界面应优先使用相对布局。

## 定位属性

| 属性 | 说明 |
| --- | --- |
| `Canvas.Left` | 子控件到画布左边缘的距离。 |
| `Canvas.Top` | 子控件到画布上边缘的距离。 |
| `children` | 子控件数组。 |

## 示例

```yaml
layout:
- !Canvas
  children:
  - !Button
    text: 固定位置
    width: 100
    height: 32
    Canvas.Left: 50
    Canvas.Top: 30
```

绝对坐标不会自动适配不同界面尺寸，没有特殊需求时不要使用。

[返回控件总览](../overview.md)
