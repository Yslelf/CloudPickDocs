---
title: EntityView
permalink: /controls/entity-view
categories: [控件, 游戏内容]
---

# EntityView 实体视图

`EntityView` 用于在界面中渲染玩家或其他三维实体，可使用默认实体，也可覆盖模型、纹理和动画。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `entity` | `Self` 表示玩家自身，`Cursor` 表示光标所指实体。 |
| `entityUUID` | 指定实体 UUID。 |
| `rendering` | 是否渲染实体。 |
| `followMouse` | 实体是否跟随鼠标旋转。 |
| `entityScale` | 实体模型缩放。 |
| `entityModel`、`entityTexture`、`entityAnimation` | 自定义模型、纹理和动画。 |
| `hideName` | 是否隐藏实体名称。 |

## 示例

```yaml
layout:
- !EntityView
  entity: Self
  rendering: true
  followMouse: true
  entityScale: 1.0
  hideName: true
  width: 100
  height: 150
```

[返回控件总览](../index.md)
