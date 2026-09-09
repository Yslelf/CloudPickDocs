import { defineConfig } from "vitepress";
import shared from "./locales/shared"; // ⬅️ 导入共享配置
import zh from "./locales/zh"; // ⬅️ 导入中文配置
import en from "./locales/en"; // ⬅️ 导入英文配置
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import AutoFrontmatter, { FileInfo } from "vitepress-plugin-auto-frontmatter";
import { useTransformByRules, type TransformRule } from "./theme/composables/useTransform";

// 🔗 国际化配置 - 激活多语言支持
export default defineConfig({
  base: '/CloudPickDocs/',
  ...shared,
  locales: {
    root: { label: "简体中文", ...zh }, // 默认中文语言
    en: { label: "English", ...en }, // 英文语言
  },
  
  // 🔗 重写规则 - 解决根语言文档目录问题
  rewrites: {
    "zh/:rest*": ":rest*", // 中文语言重定向到根目录
  },
});
