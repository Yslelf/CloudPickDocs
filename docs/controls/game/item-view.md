---
title: ItemView
permalink: /controls/item-view
categories: [控件, 游戏内容]
---

# ItemView 物品视图

`ItemView` 用于在界面中渲染指定物品。它既可以关联槽位标识符，也可以通过物品数据直接指定内容。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `identifier` | 关联的槽位标识符。 |
| `rendering` | 是否渲染物品。 |
| `itemStack` | 直接指定物品数据。 |
| `itemScale` | 物品显示缩放。 |

## 示例

```yaml
layout:
- !ItemView
  name: 钻石预览
  rendering: true
  itemStack: '{"id":"minecraft:diamond", "Count":1}'
  itemScale: 1.0
  width: 32
  height: 32
```

[返回控件总览](../index.md)
