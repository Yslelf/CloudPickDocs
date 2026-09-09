---
title: WebView
permalink: /controls/web-view
categories: [控件, 图片与媒体]
---

# WebView 浏览器视图

`WebView` 用于在云拾界面中嵌入网页。网页加载完成后，可以通过事件执行相应脚本。

## 常用属性

| 属性 | 说明 |
| --- | --- |
| `url` | 要加载的网页地址。 |
| `width`、`height` | 浏览器视图尺寸。 |
| `events.loadFinished` | 网页加载完成时执行的脚本。 |

## 示例

```yaml
layout:
- !WebView
  name: 内嵌网页
  url: https://www.example.com
  width: 800
  height: 600
  events:
    loadFinished: |-
      Chat.send("网页加载完成")
```

嵌入外部网页前，请确认页面来源可信，并考虑网络不可用或加载失败的情况。

[返回控件总览](../overview.md)
