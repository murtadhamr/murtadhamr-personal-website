import _sfc_main$1 from "./ContentDoc-DRaq4rie.js";
import _sfc_main$2 from "./ContentRenderer-BPhJTaQq.js";
import { d as useRoute, b as useSeoMeta } from "../server.mjs";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "./ContentQuery-BrIGTIyO.js";
import "./query-BP-k-7-9.js";
import "ohash";
import "./preview-G4lUPvVq.js";
import "cookie-es";
import "h3";
import "destr";
import "klona";
import "./ContentRendererMarkdown-DIXPNc_5.js";
import "scule";
import "property-information";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "devalue";
import "tailwind-merge";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "vue-use-fixed-header";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { slug } = route.params;
    useSeoMeta({
      ogImage: `https://fayazahmed.com/articles/${slug}.png`,
      twitterCard: "summary_large_image",
      articleAuthor: "Fayaz Ahmed"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$1;
      const _component_ContentRenderer = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">`);
      _push(ssrRenderComponent(_component_ContentDoc, { tag: "article" }, {
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article${_scopeId}><h1${_scopeId}>${ssrInterpolate(doc.title)}</h1>`);
            _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", null, [
                createVNode("h1", null, toDisplayString(doc.title), 1),
                createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-NE9xNlbY.js.map
