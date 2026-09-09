---
title: SpineView
permalink: /controls/spine-view
categories: [控件, 图片与媒体]
---

# SpineView 骨骼动画视图

`SpineView` 用于加载并显示 Spine 骨骼动画资源，可控制渲染、对齐和内容填充方式。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `atlas` | Spine 图集文件。 |
| `skeleton` | Spine 骨骼文件。 |
| `rendering` | 是否渲染动画。 |
| `alignment` | 动画对齐方式。 |
| `contentMode` | 内容填充方式。 |

## 示例

```yaml
layout:
- !SpineView
  alignment: TopLeft
  rendering: true
  contentMode: Fill
  atlas: spine/character.atlas
  skeleton: spine/character.skel
  width: 200
  height: 300
```

[返回控件总览](../overview.md)
