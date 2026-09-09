---
title: ProgressBar
permalink: /controls/progress-bar
categories: [控件, 游戏内容]
---

# ProgressBar 进度条

`ProgressBar` 用于显示加载进度、血量、经验或任务完成度，也支持二级进度和不确定状态。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `min`、`max` | 进度范围。 |
| `progress` | 当前进度。 |
| `progressBrush` | 主进度条颜色或纹理。 |
| `secondaryProgress` | 二级进度，例如缓冲进度。 |
| `secondaryProgressBrush` | 二级进度条样式。 |
| `indeterminate` | 是否启用不确定进度模式。 |

## 示例

```yaml
layout:
- !ProgressBar
  min: 0
  max: 10000
  progress: 5000
  progressBrush: Red
  secondaryProgress: 7000
  secondaryProgressBrush: Blue
  width: 200
  height: 20
```

[返回控件总览](../overview.md)
