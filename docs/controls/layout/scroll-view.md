---
title: ScrollView
permalink: /controls/scroll-view
categories: [控件, 布局容器]
---

# ScrollView 滚动框

`ScrollView` 在内容超出可见范围时提供水平或垂直滚动。它只能包含一个直接子控件；需要滚动多个控件时，先用布局容器组合它们。

## 关键属性

| 属性 | 说明 |
| --- | --- |
| `verticalBarVisibility` | 垂直滚动条：`Visible`、`Hidden`、`Collapsed` 或 `Auto`。 |
| `horizontalBarVisibility` | 水平滚动条的可见性。 |
| `verticalBarSize`、`horizontalBarSize` | 滚动条尺寸。 |
| `child` | 唯一的直接子控件。 |

## 示例

```yaml
layout:
- !ScrollView
  verticalBarVisibility: Auto
  child:
  - !StackPanel
    orientation: Vertical
    children:
    - !TextBlock
      text: 第一项
    - !TextBlock
      text: 第二项
```

[返回控件总览](../overview.md)
