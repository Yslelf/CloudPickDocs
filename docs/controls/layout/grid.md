---
title: Grid
permalink: /controls/grid
categories: [控件, 布局容器]
---

# Grid 网格容器

`Grid` 是最通用的布局容器。它通过行和列划分空间，适合表单、信息面板和由多个区域组成的界面。没有定义行列时，子控件会处于同一区域，可以相互叠放。

## 关键属性

| 属性 | 说明 |
| --- | --- |
| `rows` | 定义行；支持固定数值、比例值 `*` 和 `Auto`。 |
| `columns` | 定义列；支持固定数值、比例值 `*` 和 `Auto`。 |
| `children` | 子控件数组。 |

## 示例

```yaml
layout:
- !Grid
  rows:
  - height: Auto
  - height: 1*
  columns:
  - width: 100
  - width: 1*
  children:
  - !TextBlock
    text: 标题
    row: 0
    column: 0
    columnSpan: 2
  - !TextBlock
    text: 左侧内容
    row: 1
    column: 0
  - !TextBlock
    text: 主体内容
    row: 1
    column: 1
```

简单的单行或单列界面优先使用 `StackPanel`，避免不必要的网格计算。

[返回控件总览](../index.md)
