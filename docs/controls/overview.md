---
title: 控件概览
date: 2026-09-09 23:55:00
article: false
pageStyle: default
sidebarSort: 1
---

# 控件

云拾界面由不同类型的控件组成。你可以使用布局容器组织界面，通过文本、输入和反馈控件实现交互，也可以在界面中显示游戏内容、媒体或网页。

点击下面的控件卡片，可以查看对应的 YAML 配置和属性说明。

## 布局容器

<div class="control-grid">
  <a class="control-card" href="./01.布局容器/grid.html">
    <span class="control-icon">▦</span>
    <span class="control-info"><strong>Grid</strong><small>使用行和列组织复杂界面，也可以让子控件相互叠放。</small></span>
  </a>
  <a class="control-card" href="./01.布局容器/stack-panel.html">
    <span class="control-icon">☷</span>
    <span class="control-info"><strong>StackPanel</strong><small>将子控件沿水平或垂直方向依次排列。</small></span>
  </a>
  <a class="control-card" href="./01.布局容器/wrap-panel.html">
    <span class="control-icon">↵</span>
    <span class="control-info"><strong>WrapPanel</strong><small>顺序排列子控件，并在空间不足时自动换行。</small></span>
  </a>
  <a class="control-card" href="./01.布局容器/scroll-view.html">
    <span class="control-icon">↕</span>
    <span class="control-info"><strong>ScrollView</strong><small>在内容超出显示区域时提供滚动浏览能力。</small></span>
  </a>
  <a class="control-card" href="./01.布局容器/border.html">
    <span class="control-icon">□</span>
    <span class="control-info"><strong>Border</strong><small>为单个子控件添加背景、边框和圆角。</small></span>
  </a>
  <a class="control-card" href="./01.布局容器/canvas.html">
    <span class="control-icon">⌖</span>
    <span class="control-info"><strong>Canvas</strong><small>使用绝对坐标自由放置子控件。</small></span>
  </a>
</div>

## 文本与输入

<div class="control-grid">
  <a class="control-card" href="./02.文本与输入/text-block.html">
    <span class="control-icon">T</span>
    <span class="control-info"><strong>TextBlock</strong><small>显示普通文本、富文本和打字机文本。</small></span>
  </a>
  <a class="control-card" href="./02.文本与输入/button.html">
    <span class="control-icon">◉</span>
    <span class="control-info"><strong>Button</strong><small>接收点击操作并执行对应事件。</small></span>
  </a>
  <a class="control-card" href="./02.文本与输入/text-box.html">
    <span class="control-icon">⌨</span>
    <span class="control-info"><strong>TextBox</strong><small>接收和编辑用户输入的文本。</small></span>
  </a>
</div>

## 数据与游戏内容

<div class="control-grid">
  <a class="control-card" href="./03.游戏内容/progress-bar.html">
    <span class="control-icon">▰</span>
    <span class="control-info"><strong>ProgressBar</strong><small>显示加载进度、血量或任务完成度。</small></span>
  </a>
  <a class="control-card" href="./03.游戏内容/slot-view.html">
    <span class="control-icon">▣</span>
    <span class="control-info"><strong>SlotView</strong><small>显示并装饰游戏中的物品栏槽位。</small></span>
  </a>
  <a class="control-card" href="./03.游戏内容/item-view.html">
    <span class="control-icon">◇</span>
    <span class="control-info"><strong>ItemView</strong><small>在界面中渲染指定物品。</small></span>
  </a>
  <a class="control-card" href="./03.游戏内容/entity-view.html">
    <span class="control-icon">♙</span>
    <span class="control-info"><strong>EntityView</strong><small>在界面中渲染玩家或其他三维实体。</small></span>
  </a>
</div>

## 图片、媒体与嵌入

<div class="control-grid">
  <a class="control-card" href="./04.图片与媒体/image.html">
    <span class="control-icon">▧</span>
    <span class="control-info"><strong>Image</strong><small>显示纹理或其他图片资源。</small></span>
  </a>
  <a class="control-card" href="./04.图片与媒体/media-view.html">
    <span class="control-icon">▶</span>
    <span class="control-info"><strong>MediaView</strong><small>播放视频和音频媒体。</small></span>
  </a>
  <a class="control-card" href="./04.图片与媒体/spine-view.html">
    <span class="control-icon">✦</span>
    <span class="control-info"><strong>SpineView</strong><small>加载并显示 Spine 骨骼动画。</small></span>
  </a>
  <a class="control-card" href="./04.图片与媒体/web-view.html">
    <span class="control-icon">◎</span>
    <span class="control-info"><strong>WebView</strong><small>在界面中嵌入并显示网页。</small></span>
  </a>
</div>

## 开始使用

- 第一次编写界面，请先阅读[结构详解与新手教程](../03.UI界面/01.UI界面/02.结构详解-新手教程.md)。
- 不确定该选哪个容器时，请阅读[选择布局容器](../03.UI界面/03.布局/02.选择布局容器.md)。
- 查找尺寸、对齐、边距等通用配置时，请阅读[公共属性](../03.UI界面/01.UI界面/07.公共属性.md)。
- 查看所有控件的完整 YAML 示例，请前往[控件列表](../03.UI界面/01.UI界面/04.控件列表.md)。

<style>
.control-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 18px 0 34px;
}

.control-card {
  display: flex;
  align-items: center;
  min-height: 104px;
  padding: 18px;
  color: var(--vp-c-text-1) !important;
  text-decoration: none !important;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.control-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.control-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 52px;
  width: 52px;
  height: 52px;
  margin-right: 16px;
  color: var(--vp-c-brand-1);
  font-size: 27px;
  font-weight: 700;
  border-radius: 10px;
  background: var(--vp-c-brand-soft);
}

.control-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.control-info strong {
  margin-bottom: 6px;
  font-size: 17px;
  line-height: 1.35;
}

.control-info small {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.55;
}

@media (max-width: 640px) {
  .control-grid {
    grid-template-columns: 1fr;
  }
}
</style>
