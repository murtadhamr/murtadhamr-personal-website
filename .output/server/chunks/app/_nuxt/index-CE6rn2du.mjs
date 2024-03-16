import { _ as __nuxt_component_0 } from './Header-NhVwjuxJ.mjs';
import { b as useSeoMeta, a as __nuxt_component_0$2 } from '../server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, q as queryContent } from './query-NDHSx6pe.mjs';
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
import './preview-G4lUPvVq.mjs';

const _sfc_main$1 = {
  __name: "ArticleCard",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const getReadableDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.article._path,
        class: "group"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article${_scopeId}><time class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5" datetime="2022-09-05"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"${_scopeId}><span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"${_scopeId}></span></span> ${ssrInterpolate(getReadableDate(__props.article.published))}</time><h2 class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.article.title)}</h2><p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400 text-justify"${_scopeId}>${ssrInterpolate(__props.article.description)}</p></article>`);
          } else {
            return [
              createVNode("article", null, [
                createVNode("time", {
                  class: "relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5",
                  datetime: "2022-09-05"
                }, [
                  createVNode("span", {
                    class: "absolute inset-y-0 left-0 flex items-center",
                    "aria-hidden": "true"
                  }, [
                    createVNode("span", { class: "h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" })
                  ]),
                  createTextVNode(" " + toDisplayString(getReadableDate(__props.article.published)), 1)
                ]),
                createVNode("h2", { class: "text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600" }, toDisplayString(__props.article.title), 1),
                createVNode("p", { class: "relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400 text-justify" }, toDisplayString(__props.article.description), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ArticleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const description = "All about interesting things: data, analytics, machine learning.";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Blog | Muhammad Murtadha Ramadhan",
      description
    });
    const { data: articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "all-articles",
      () => queryContent("/articles").sort({ published: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppArticleCard = __nuxt_component_1;
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

export { _sfc_main as default };
//# sourceMappingURL=index-CE6rn2du.mjs.map
