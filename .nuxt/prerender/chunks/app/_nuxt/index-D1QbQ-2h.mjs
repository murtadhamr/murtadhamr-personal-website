import { u as useHead, _ as _export_sfc, f as useNuxtApp, e as useRuntimeConfig, a as __nuxt_component_0$2, g as __nuxt_component_0$3, b as useSeoMeta } from '../server.mjs';
import { defineComponent, ref, computed, h, useSSRContext, withCtx, createVNode, toDisplayString, withAsyncContext, unref, mergeProps } from 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/vue/index.mjs';
import { defu } from 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/defu/dist/defu.mjs';
import { encodeParam, hasProtocol, withLeadingSlash, joinURL, parseURL, encodePath } from 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/ufo/dist/index.mjs';
import { u as useRequestEvent } from './preview-G4lUPvVq.mjs';
import { appendHeader } from 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/h3/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_1 } from './ProjectCard-BpcCOczd.mjs';
import { u as useAsyncData, q as queryContent } from './query-NDHSx6pe.mjs';
import { _ as __nuxt_component_0$4 } from './Button-BcA7QdAM.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unctx/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unhead/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/klona/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/tailwind-merge/dist/tailwind-merge.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/vue-use-fixed-header/dist/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/destr/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/scule/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/pathe/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/shiki/dist/core.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unified/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/micromark/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/micromark-util-character/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/slugify/slugify.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/remark-parse/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/remark-rehype/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/hast-util-to-string/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/github-slugger/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/detab/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/remark-emoji/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/remark-gfm/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/rehype-external-links/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/rehype-raw/index.js';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/ipx/dist/index.mjs';
import 'file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/cookie-es/dist/index.mjs';
import './Avatar-BHkaHI47.mjs';
import './Icon-C02Uvfmz.mjs';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file:///Users/murtadha.ramadhan/Documents/personal-website-3/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "") {
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(
    useRequestEvent(),
    "x-nitro-prerender",
    paths.map((p) => encodeURIComponent(p)).join(", ")
  );
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$FUvBMytYBi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$FUvBMytYBi, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$5 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Muhammad Murtadha Ramadhan",
      description: "I'm Ado, your data guy"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/avatar.png",
        alt: "Fayaz Ahmed",
        class: "ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16",
        sizes: "48px sm:64px",
        placeholder: "",
        format: "webp"
      }, null, _parent));
      _push(`<h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"> Hello there!\u{1F44B} </h1><p class="text-gray-900 dark:text-gray-400" style="${ssrRenderStyle({ "text-align": "justify" })}"> Muhammad Murtadha Ramadhan, usually called Ado, is a business analytics professional with solid experiences in 2 largest Indonesia tech companies #1 Grab and #2 Tokopedia (GoTo Group) where he took part in composing actionable insights through analytics and developing business strategy and operations. Ado is currently a Master of Science in Business Analytics candidate in University of Southern California Marshall School of Business. Prior to it, Ado graduated with a Bachelor&#39;s Degree in Computer Science from IPB University and was awarded as one of the best students in Indonesia. </p><p class="text-gray-900 dark:text-gray-400"> My resume is accessible <a href="https://drive.google.com/file/d/1WMiAsEDsJmUcozfC1UFTJUk_GHxBsm8V/view?usp=sharing" target="_blank" style="${ssrRenderStyle({ "color": "blue" })}">here</a></p></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Intro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$5;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "GitHub",
        url: "https://github.com/murtadhamr",
        icon: "mdi:github"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/murtadhamr/",
        icon: "mdi:linkedin"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">FIND ME ON</h2><div class="space-y-5"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.icon,
          to: link.url,
          target: "_blank",
          external: "",
          class: "flex items-end gap-4 dark:hover:text-gray-300 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm"${_scopeId}>${ssrInterpolate(link.name)}</span><div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: link.icon,
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "text-sm" }, toDisplayString(link.name), 1),
                createVNode("div", { class: "flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700" }),
                createVNode(_component_Icon, {
                  name: link.icon,
                  class: "w-6 h-6"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/SocialLinks.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProfessionalExperiences",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: experiences } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "professinalexp-home",
      () => queryContent("/professionalexp").find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppProjectCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold text-gray-400 mb-6"> PROFESSIONAL EXPERIENCES </h2><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(experiences), (project, id) => {
        _push(ssrRenderComponent(_component_AppProjectCard, {
          key: id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/ProfessionalExperiences.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Education",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: educations } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "education-home",
      () => queryContent("/education").find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppProjectCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold text-gray-400 mb-6"> EDUCATION </h2><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(educations), (project, id) => {
        _push(ssrRenderComponent(_component_AppProjectCard, {
          key: id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Education.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FeaturedProjects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "projects-home",
      () => queryContent("/projects").limit(3).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppProjectCard = __nuxt_component_1;
      const _component_UButton = __nuxt_component_0$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold text-gray-400 mb-6"> FEATURED PROJECTS </h2><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(projects), (project, id) => {
        _push(ssrRenderComponent(_component_AppProjectCard, {
          key: id,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center justify-center mt-6 text-sm">`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "All Projects \u2192",
        to: "/projects",
        variant: "link",
        color: "gray"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/FeaturedProjects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HomeIntro = __nuxt_component_0;
  const _component_HomeSocialLinks = _sfc_main$4;
  const _component_HomeProfessionalExperiences = _sfc_main$3;
  const _component_HomeEducation = _sfc_main$2;
  const _component_HomeFeaturedProjects = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="space-y-24">`);
  _push(ssrRenderComponent(_component_HomeIntro, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeSocialLinks, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeProfessionalExperiences, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeEducation, null, null, _parent));
  _push(ssrRenderComponent(_component_HomeFeaturedProjects, null, null, _parent));
  _push(`</div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-D1QbQ-2h.mjs.map
