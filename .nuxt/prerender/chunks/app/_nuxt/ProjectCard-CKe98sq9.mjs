import { a as __nuxt_component_0$2 } from '../server.mjs';
import { _ as __nuxt_component_1$1 } from './Avatar-CQ2Nqpul.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UAvatar = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "flex items-end gap-4 group p-2 -m-2 rounded-lg",
        to: __props.project.url,
        target: "_blank",
        external: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-sm"${_scopeId}><h3 class="text-sm font-medium group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.project.name)}</h3><p class="text-gray-400 text-sm"${_scopeId}>${ssrInterpolate(__props.project.description)}</p></div><div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: __props.project.thumbnail,
              ui: { rounded: "rounded z-10 relative" },
              size: "md",
              alt: __props.project.name
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-sm" }, [
                createVNode("h3", { class: "text-sm font-medium group-hover:text-primary-600" }, toDisplayString(__props.project.name), 1),
                createVNode("p", { class: "text-gray-400 text-sm" }, toDisplayString(__props.project.description), 1)
              ]),
              createVNode("div", { class: "flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700" }),
              createVNode(_component_UAvatar, {
                src: __props.project.thumbnail,
                ui: { rounded: "rounded z-10 relative" },
                size: "md",
                alt: __props.project.name
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ProjectCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ProjectCard-CKe98sq9.mjs.map
