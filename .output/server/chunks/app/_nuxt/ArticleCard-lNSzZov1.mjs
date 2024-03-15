import { a as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
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
            _push2(`<article${_scopeId}><time class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5" datetime="2022-09-05"${_scopeId}><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"${_scopeId}><span class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"${_scopeId}></span></span> ${ssrInterpolate(getReadableDate(__props.article.published))}</time><h2 class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"${_scopeId}>${ssrInterpolate(__props.article.title)}</h2><p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(__props.article.description)}</p></article>`);
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
                createVNode("p", { class: "relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(__props.article.description), 1)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ArticleCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ArticleCard-lNSzZov1.mjs.map
