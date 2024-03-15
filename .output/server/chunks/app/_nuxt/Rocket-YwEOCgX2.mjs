import { _ as _export_sfc, g as __nuxt_component_0 } from '../server.mjs';
import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-use-fixed-header';

const _sfc_main = {
  __name: "Rocket",
  __ssrInlineRender: true,
  setup(__props) {
    const fast = ref(false);
    const streakSpeed = computed(() => fast.value ? "0.5s" : "2s");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "py-12 relative overflow-hidden flex items-center justify-center w-full bg-gray-100 dark:bg-gray-900 dark:text-white",
        style: { "--streak-speed": unref(streakSpeed) }
      }, _attrs))} data-v-fa2d0691><span class="${ssrRenderClass([{ shake: unref(fast), move: !unref(fast) }, "rocket"])}" data-v-fa2d0691>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:rocket-duotone",
        class: "h-12 w-12 -rotate-90"
      }, null, _parent));
      _push(`</span><!--[-->`);
      ssrRenderList(5, (n) => {
        _push(`<span style="${ssrRenderStyle({
          top: Math.random() * 100 + "%",
          animationDelay: Math.random() * 1 + "s",
          animationDuration: unref(streakSpeed)
        })}" class="streak absolute left-0 w-1/5 h-0.5 bg-gradient-to-r from-transparent to-black/60 dark:to-white/40" data-v-fa2d0691></span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Rocket.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Rocket = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa2d0691"]]);

export { Rocket as default };
//# sourceMappingURL=Rocket-YwEOCgX2.mjs.map
