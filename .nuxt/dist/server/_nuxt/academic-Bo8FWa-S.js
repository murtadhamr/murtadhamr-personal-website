import { _ as __nuxt_component_0$1 } from "./Header-NhVwjuxJ.js";
import { defineComponent, useSSRContext, withCtx, createVNode, toDisplayString, withAsyncContext, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { a as __nuxt_component_0, b as useSeoMeta } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-BP-k-7-9.js";
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
import "./preview-G4lUPvVq.js";
import "cookie-es";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UsesHeader",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(_attrs)}><div class="relative after:-z-10 after:block after:h-[2px] after:absolute after:top-1/2 after:transform after:bg-gray-100 dark:after:bg-white/10 after:w-full after:left-0 after:right-0"><span class="font-medium text-sm text-gray-600 dark:text-gray-500 bg-gray-50 dark:bg-black pr-4">${ssrInterpolate(__props.title)}</span></div></li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/UsesHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "UsesItem",
  __ssrInlineRender: true,
  props: {
    item: Object,
    required: true
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.item.url,
        class: "group",
        target: "_blank",
        external: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.item.name)}</p><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(__props.item.description)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600" }, toDisplayString(__props.item.name), 1),
              createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(__props.item.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/UsesItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const description = "Academic courses I have completed during my academic journey";
const _sfc_main = {
  __name: "academic",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Academic courses | Muhammad Murtadha Ramadhan",
      description
    });
    const { data: items } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "academic",
      () => queryContent("/academic").find()
    )), __temp = await __temp, __restore(), __temp);
    const ipb = items.value.filter((item) => item.category === "ipb");
    const usc = items.value.filter((item) => item.category === "usc");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0$1;
      const _component_AppUsesHeader = _sfc_main$2;
      const _component_AppUsesItem = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-12",
        title: "Academic courses",
        description
      }, null, _parent));
      _push(`<div class="space-y-24"><ul class="space-y-8">`);
      _push(ssrRenderComponent(_component_AppUsesHeader, { title: "MS in Business Analytics, USC Marshall School of Business" }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(usc), (item, id) => {
        _push(ssrRenderComponent(_component_AppUsesItem, {
          key: id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul><ul class="space-y-8">`);
      _push(ssrRenderComponent(_component_AppUsesHeader, { title: "BSc in Computer Science, IPB University" }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(ipb), (item, id) => {
        _push(ssrRenderComponent(_component_AppUsesItem, {
          key: id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=academic-Bo8FWa-S.js.map
