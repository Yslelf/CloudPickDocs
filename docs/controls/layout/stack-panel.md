---
title: StackPanel
permalink: /controls/stack-panel
categories: [控件, 布局容器]
---

# StackPanel 堆叠容器

`StackPanel` 按声明顺序将子控件排列成一行或一列，适合菜单、工具栏和简单表单。

## 关键属性

| 属性 | 说明 |
| --- | --- |
| `orientation` | 排列方向：`Vertical` 或 `Horizontal`。 |
| `spacing` | 子控件间距，当前暂未实现。 |
| `children` | 按顺序排列的子控件数组。 |

## 示例

```yaml
layout:
- !StackPanel
  orientation: Vertical
  children:
  - !TextBlock
    text: 用户名
  - !TextBox
    width: 180
  - !Button
    text: 登录
```

内容可能超出显示区域时，应将 `StackPanel` 放入 `ScrollView`。

[返回控件总览](../overview.md)
