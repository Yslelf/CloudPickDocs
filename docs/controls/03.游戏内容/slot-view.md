---
title: SlotView
permalink: /controls/slot-view
categories: [控件, 游戏内容]
---

# SlotView 槽位视图

`SlotView` 用于显示游戏物品栏槽位，并可分别设置有物品与空槽位时的背景和前景。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `identifier` | 槽位标识符。 |
| `rendering` | 是否渲染槽位内容。 |
| `slotFillBackground` | 有物品时的背景。 |
| `slotEmptyBackground` | 空槽位背景。 |
| `slotFillForeground` | 有物品时的前景装饰。 |
| `slotEmptyForeground` | 空槽位前景装饰。 |
| `itemScale` | 槽位内物品缩放。 |

## 示例

```yaml
layout:
- !SlotView
  identifier: slot_0
  rendering: true
  slotFillBackground: texture://slot_filled.png
  slotEmptyBackground: 0x80000000
  itemScale: 1.0
```

[返回控件总览](../overview.md)
