import { a as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

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
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center gap-4 group p-2 -m-2 rounded-lg",
        to: __props.project.url,
        target: "_blank",
        external: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-m"${_scopeId}><h3 class="text-sm font-medium group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.project.name)}</h3><p class="text-gray-400 text-sm"${_scopeId}>${ssrInterpolate(__props.project.description)}</p></div><div class="flex-1 border-b border-dashed border-gray-50 dark:border-gray-50 group-hover:border-gray-50"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-m" }, [
                createVNode("h3", { class: "text-sm font-medium group-hover:text-primary-600" }, toDisplayString(__props.project.name), 1),
                createVNode("p", { class: "text-gray-400 text-sm" }, toDisplayString(__props.project.description), 1)
              ]),
              createVNode("div", { class: "flex-1 border-b border-dashed border-gray-50 dark:border-gray-50 group-hover:border-gray-50" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-gray-600 dark:text-gray-400 text-xs">Techs/skills: ${ssrInterpolate(__props.project.tech1)}, ${ssrInterpolate(__props.project.tech2)}, ${ssrInterpolate(__props.project.tech3)}</p><!--]-->`);
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
//# sourceMappingURL=ProjectCard-BvatAK0f.mjs.map
