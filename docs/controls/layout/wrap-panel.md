---
title: WrapPanel
permalink: /controls/wrap-panel
categories: [控件, 布局容器]
---

# WrapPanel 换行容器

`WrapPanel` 顺序排列子控件，并在一行或一列空间不足时自动换行，适合图标、标签和物品集合。

## 关键属性

| 属性 | 说明 |
| --- | --- |
| `orientation` | 主排列方向：`Horizontal` 或 `Vertical`。 |
| `horizontalSpacing` | 横向间距，当前暂未实现。 |
| `verticalSpacing` | 纵向间距，当前暂未实现。 |
| `itemWidth`、`itemHeight` | 统一项目尺寸，当前暂未实现。 |

## 示例

```yaml
layout:
- !WrapPanel
  orientation: Horizontal
  children:
  - !Image
    width: 50
    height: 50
    source: texture://icon1.png
  - !Image
    width: 50
    height: 50
    source: texture://icon2.png
```

如果项目必须严格对齐为行列，请使用 `Grid`。

[返回控件总览](../overview.md)
