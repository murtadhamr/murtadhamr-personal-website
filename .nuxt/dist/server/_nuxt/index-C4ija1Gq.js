import { _ as __nuxt_component_0 } from "./Header-NhVwjuxJ.js";
import { _ as __nuxt_component_0$1 } from "./ArticleCard-lNSzZov1.js";
import { d as useSeoMeta } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-CiD6WDnj.js";
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
import "tailwind-merge";
import "ohash";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "vue-use-fixed-header";
import "./preview-CLC3vvQY.js";
import "cookie-es";
const description = "All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Articles | Fayaz Ahmed",
      description
    });
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "all-articles",
      () => queryContent("/articles").sort({ published: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppArticleCard = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-16",
        title: "Articles",
        description
      }, null, _parent));
      _push(`<ul class="space-y-16"><!--[-->`);
      ssrRenderList(unref(articles), (article, id) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_AppArticleCard, { article }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C4ija1Gq.js.map
