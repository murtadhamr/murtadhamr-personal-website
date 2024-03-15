import { _ as __nuxt_component_0 } from "./Button-CF3xW8BS.js";
import { ref, computed, watch, getCurrentInstance, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { t as toValue, n as notNullish, a as noop, b as tryOnScopeDispose, w as watchOnce } from "./index-D3zsYv2W.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./Icon-DkHigz74.js";
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
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance())
    ;
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
function useElementVisibility(element, options = {}) {
  const { window: window2 = defaultWindow, scrollTarget } = options;
  const elementIsVisible = ref(false);
  useIntersectionObserver(
    element,
    (intersectionObserverEntries) => {
      let isIntersecting = elementIsVisible.value;
      let latestTime = 0;
      for (const entry of intersectionObserverEntries) {
        if (entry.time >= latestTime) {
          latestTime = entry.time;
          isIntersecting = entry.isIntersecting;
        }
      }
      elementIsVisible.value = isIntersecting;
    },
    {
      root: scrollTarget,
      window: window2,
      threshold: 0
    }
  );
  return elementIsVisible;
}
const _sfc_main = {
  __name: "AnimatedCounter",
  __ssrInlineRender: true,
  props: {
    targetNumber: {
      type: Number,
      required: true,
      default: 1234
    }
  },
  setup(__props) {
    const target = ref(null);
    const targetIsVisible = useElementVisibility(target);
    const props = __props;
    const startCounter = () => {
      const counter = (void 0).querySelector(".animate-counter");
      counter.animate([{ "--num": 0 }, { "--num": props.targetNumber }], {
        duration: 1e3,
        easing: "ease-out",
        fill: "forwards"
      });
    };
    watchOnce(targetIsVisible, () => {
      startCounter();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0;
      const _cssVars = { style: {
        "--4977d1da": props.targetNumber
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-8 flex items-center justify-center flex-col" }, _attrs, _cssVars))} data-v-e9f86973><span class="flex tabular-nums text-slate-900 dark:text-white text-5xl font-extrabold mb-2 [counter-set:_num_var(--num)] before:content-[counter(num)] animate-counter" data-v-e9f86973><span class="sr-only" data-v-e9f86973>${ssrInterpolate(__props.targetNumber)}</span>+ </span>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "white",
        onClick: startCounter,
        class: "mt-4",
        size: "xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start Counter `);
          } else {
            return [
              createTextVNode(" Start Counter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-xs mt-2 text-gray-500" data-v-e9f86973> or start the counter when this component is in the viewport </p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/AnimatedCounter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AnimatedCounter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e9f86973"]]);
export {
  AnimatedCounter as default
};
//# sourceMappingURL=AnimatedCounter-CrgLL6Q1.js.map
