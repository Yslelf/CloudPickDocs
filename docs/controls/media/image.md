---
title: Image
permalink: /controls/image
categories: [控件, 图片与媒体]
---

# Image 图片

`Image` 用于显示图片或纹理资源，可配合尺寸、对齐、边距和变换属性完成图标、背景与装饰效果。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `source` | 图片来源，通常使用 `texture://` 资源。 |
| `width`、`height` | 图片控件尺寸。 |
| `opacity` | 整体不透明度。 |
| `scale`、`rotateZ` | 缩放和旋转。 |

## 示例

```yaml
layout:
- !Image
  name: 图标
  source: texture://ui/icon.png
  width: 64
  height: 64
  horizontalAlign: Center
  verticalAlign: Center
```

[返回控件总览](../overview.md)
