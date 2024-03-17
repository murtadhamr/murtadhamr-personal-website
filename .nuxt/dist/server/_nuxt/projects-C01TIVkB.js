import { _ as __nuxt_component_0 } from "./Header-NhVwjuxJ.js";
import { _ as __nuxt_component_1 } from "./ProjectCard-C3zDBAER.js";
import { b as useSeoMeta } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-NDHSx6pe.js";
import { withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "./Avatar-BHkaHI47.js";
import "./Icon-C02Uvfmz.js";
import "tailwind-merge";
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
import "ohash";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "vue-use-fixed-header";
import "./preview-G4lUPvVq.js";
import "cookie-es";
const description = "Some of the projects I've built or been a part of";
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      title: "Projects | Muhammad Murtadha Ramadhan",
      description
    });
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "projects-all",
      () => queryContent("/projects").find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppProjectCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-12",
        title: "Projects",
        description
      }, null, _parent));
      _push(`<div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(projects), (project, id) => {
        _push(ssrRenderComponent(_component_AppProjectCard, {
          key: id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projects-C01TIVkB.js.map
