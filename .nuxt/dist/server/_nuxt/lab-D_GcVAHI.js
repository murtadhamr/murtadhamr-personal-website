import { _ as __nuxt_component_0 } from "./Header-NhVwjuxJ.js";
import _sfc_main$1 from "./ContentList-D9bB355M.js";
import _sfc_main$2 from "./ContentQuery-wDhbYb9M.js";
import _sfc_main$3 from "./ContentRenderer-CavdRbEC.js";
import _sfc_main$4 from "./ContentRendererMarkdown-Bkqn6NiH.js";
import { d as useSeoMeta } from "../server.mjs";
import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "./query-CiD6WDnj.js";
import "ufo";
import "ohash";
import "./preview-CLC3vvQY.js";
import "cookie-es";
import "h3";
import "destr";
import "klona";
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
const description = "Some random experiments with UI I do in my free time.";
const _sfc_main = {
  __name: "lab",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Lab | Fayaz Ahmed",
      description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_ContentList = _sfc_main$1;
      const _component_ContentQuery = _sfc_main$2;
      const _component_ContentRenderer = _sfc_main$3;
      const _component_ContentRendererMarkdown = _sfc_main$4;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, {
        class: "mb-12",
        title: "Lab",
        description
      }, null, _parent));
      _push(`<div class="space-y-24">`);
      _push(ssrRenderComponent(_component_ContentList, { path: "/lab" }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list, (item) => {
              _push2(ssrRenderComponent(_component_ContentQuery, {
                key: item._path,
                path: item._path,
                find: "one"
              }, {
                default: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ContentRenderer, null, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ContentRendererMarkdown, { value: data }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ContentRendererMarkdown, { value: data }, null, 8, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ContentRenderer, null, {
                        default: withCtx(() => [
                          createVNode(_component_ContentRendererMarkdown, { value: data }, null, 8, ["value"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list, (item) => {
                return openBlock(), createBlock(_component_ContentQuery, {
                  key: item._path,
                  path: item._path,
                  find: "one"
                }, {
                  default: withCtx(({ data }) => [
                    createVNode(_component_ContentRenderer, null, {
                      default: withCtx(() => [
                        createVNode(_component_ContentRendererMarkdown, { value: data }, null, 8, ["value"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["path"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=lab-D_GcVAHI.js.map
