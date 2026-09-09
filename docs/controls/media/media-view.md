---
title: MediaView
permalink: /controls/media-view
categories: [控件, 图片与媒体]
---

# MediaView 媒体视图

`MediaView` 用于播放视频和音频，可以控制循环、播放速率、音量和播放位置。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `url` | 媒体文件地址。 |
| `repeat` | 是否循环播放。 |
| `rate` | 播放速率，`1` 为正常速度。 |
| `volume` | 音量，范围通常为 `0` 到 `1`。 |
| `position` | 当前播放位置，单位为秒。 |

## 示例

```yaml
layout:
- !MediaView
  url: https://example.com/video.mp4
  repeat: true
  rate: 1
  volume: 1
  position: 0
  width: 320
  height: 240
```

[返回控件总览](../index.md)
