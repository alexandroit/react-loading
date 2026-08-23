"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Loading: () => Loading,
  LoadingOverlay: () => LoadingOverlay,
  applyThemeTokens: () => import_loading_core4.applyThemeTokens,
  createLoader: () => import_loading_core4.createLoader,
  darkTheme: () => import_loading_core4.darkTheme,
  defaultLoaderOptions: () => import_loading_core4.defaultLoaderOptions,
  getLoaderStyles: () => import_loading_core4.getLoaderStyles,
  getVariantDefinition: () => import_loading_core4.getVariantDefinition,
  getVariantStyles: () => import_loading_core4.getVariantStyles,
  hideLoader: () => import_loading_core4.hideLoader,
  hydrateLoaders: () => import_loading_core4.hydrateLoaders,
  lightTheme: () => import_loading_core4.lightTheme,
  loaderVariants: () => import_loading_core4.loaderVariants,
  mountLoader: () => import_loading_core4.mountLoader,
  showLoader: () => import_loading_core4.showLoader,
  useLoading: () => useLoading,
  useLoadingController: () => useLoadingController
});
module.exports = __toCommonJS(index_exports);

// src/Loading.tsx
var import_react2 = require("react");
var import_loading_core = require("@stackline/loading-core");

// src/useIsomorphicLayoutEffect.ts
var import_react = require("react");
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;

// src/Loading.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function createManagedLoader(hostRef, options, instanceRef) {
  if (!hostRef.current) {
    return null;
  }
  if (!instanceRef.current) {
    instanceRef.current = (0, import_loading_core.createLoader)({
      ...options,
      target: hostRef.current,
      visible: false
    });
    return instanceRef.current;
  }
  instanceRef.current.update({
    ...options,
    target: hostRef.current
  });
  return instanceRef.current;
}
var Loading = (0, import_react2.forwardRef)(function Loading2({
  options = {},
  visible = true,
  onCreate,
  onShown,
  onHidden,
  onUpdated,
  onDestroyed,
  ...hostProps
}, forwardedRef) {
  const hostRef = (0, import_react2.useRef)(null);
  const instanceRef = (0, import_react2.useRef)(null);
  (0, import_react2.useImperativeHandle)(
    forwardedRef,
    () => ({
      getInstance() {
        return instanceRef.current;
      },
      show() {
        return instanceRef.current ? instanceRef.current.show() : Promise.resolve();
      },
      hide() {
        return instanceRef.current ? instanceRef.current.hide() : Promise.resolve();
      },
      toggle(force) {
        return instanceRef.current ? instanceRef.current.toggle(force) : Promise.resolve();
      },
      update(nextOptions) {
        if (instanceRef.current) {
          instanceRef.current.update(nextOptions);
        }
      },
      destroy() {
        if (instanceRef.current) {
          const current = instanceRef.current;
          current.destroy();
          instanceRef.current = null;
          onDestroyed?.(current);
        }
      }
    }),
    [onDestroyed]
  );
  useIsomorphicLayoutEffect(() => {
    const instance = createManagedLoader(hostRef, options, instanceRef);
    if (!instance) {
      return;
    }
    onCreate?.(instance);
    return () => {
      if (instanceRef.current) {
        const current = instanceRef.current;
        current.destroy();
        instanceRef.current = null;
        onDestroyed?.(current);
      }
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    const instance = createManagedLoader(hostRef, options, instanceRef);
    if (!instance) {
      return;
    }
    onUpdated?.(instance);
    if (visible) {
      void instance.show().then(() => {
        onShown?.(instance);
      });
      return;
    }
    void instance.hide().then(() => {
      onHidden?.(instance);
    });
  }, [options, visible, onHidden, onShown, onUpdated]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: hostRef, ...hostProps });
});

// src/LoadingOverlay.tsx
var import_react3 = require("react");
var import_loading_core2 = require("@stackline/loading-core");
var import_jsx_runtime2 = require("react/jsx-runtime");
function ensureOverlayLoader(hostRef, options, instanceRef) {
  if (!hostRef.current) {
    return null;
  }
  const mergedOptions = {
    overlay: true,
    centered: true,
    ...options,
    target: hostRef.current
  };
  if (!instanceRef.current) {
    instanceRef.current = (0, import_loading_core2.createLoader)({
      ...mergedOptions,
      visible: false
    });
    return instanceRef.current;
  }
  instanceRef.current.update(mergedOptions);
  return instanceRef.current;
}
var LoadingOverlay = (0, import_react3.forwardRef)(
  function LoadingOverlay2({
    children,
    options = {},
    visible = true,
    onCreate,
    onShown,
    onHidden,
    onUpdated,
    onDestroyed,
    style,
    ...hostProps
  }, forwardedRef) {
    const hostRef = (0, import_react3.useRef)(null);
    const instanceRef = (0, import_react3.useRef)(null);
    (0, import_react3.useImperativeHandle)(
      forwardedRef,
      () => ({
        getInstance() {
          return instanceRef.current;
        },
        show() {
          return instanceRef.current ? instanceRef.current.show() : Promise.resolve();
        },
        hide() {
          return instanceRef.current ? instanceRef.current.hide() : Promise.resolve();
        },
        toggle(force) {
          return instanceRef.current ? instanceRef.current.toggle(force) : Promise.resolve();
        },
        update(nextOptions) {
          if (instanceRef.current) {
            instanceRef.current.update(nextOptions);
          }
        },
        destroy() {
          if (instanceRef.current) {
            const current = instanceRef.current;
            current.destroy();
            instanceRef.current = null;
            onDestroyed?.(current);
          }
        }
      }),
      [onDestroyed]
    );
    useIsomorphicLayoutEffect(() => {
      const instance = ensureOverlayLoader(hostRef, options, instanceRef);
      if (!instance) {
        return;
      }
      onCreate?.(instance);
      return () => {
        if (instanceRef.current) {
          const current = instanceRef.current;
          current.destroy();
          instanceRef.current = null;
          onDestroyed?.(current);
        }
      };
    }, []);
    (0, import_react3.useEffect)(() => {
      const instance = ensureOverlayLoader(hostRef, options, instanceRef);
      if (!instance) {
        return;
      }
      onUpdated?.(instance);
      if (visible) {
        void instance.show().then(() => {
          onShown?.(instance);
        });
        return;
      }
      void instance.hide().then(() => {
        onHidden?.(instance);
      });
    }, [options, visible, onHidden, onShown, onUpdated]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        ref: hostRef,
        style: {
          position: "relative",
          ...style
        },
        ...hostProps,
        children
      }
    );
  }
);

// src/useLoadingController.ts
var import_react4 = require("react");
var import_loading_core3 = require("@stackline/loading-core");
function mergeOptions(baseOptions, target, nextOptions) {
  const mergedOptions = {
    ...baseOptions,
    ...nextOptions || {}
  };
  if (typeof target !== "undefined") {
    mergedOptions.target = target;
  }
  return mergedOptions;
}
function useLoadingController(defaultOptions = {}) {
  const instanceRef = (0, import_react4.useRef)(null);
  const defaultOptionsRef = (0, import_react4.useRef)(defaultOptions);
  defaultOptionsRef.current = defaultOptions;
  (0, import_react4.useEffect)(() => {
    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, []);
  function ensureInstance(target, nextOptions) {
    const mergedOptions = mergeOptions(defaultOptionsRef.current, target, nextOptions);
    if (!instanceRef.current) {
      instanceRef.current = (0, import_loading_core3.createLoader)({
        ...mergedOptions,
        visible: false
      });
      return instanceRef.current;
    }
    if (typeof mergedOptions.target !== "undefined") {
      instanceRef.current.mount(mergedOptions.target);
    }
    instanceRef.current.update(mergedOptions);
    return instanceRef.current;
  }
  return {
    create(target, nextOptions) {
      return ensureInstance(target, nextOptions);
    },
    mount(target, nextOptions) {
      return ensureInstance(target, nextOptions);
    },
    async show(target, nextOptions) {
      const instance = ensureInstance(target, nextOptions);
      await instance.show();
      return instance;
    },
    hide() {
      return instanceRef.current ? instanceRef.current.hide() : Promise.resolve();
    },
    toggle(force) {
      return instanceRef.current ? instanceRef.current.toggle(force) : Promise.resolve();
    },
    update(nextOptions) {
      if (!instanceRef.current) {
        return null;
      }
      instanceRef.current.update(nextOptions);
      return instanceRef.current;
    },
    destroy() {
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    },
    getInstance() {
      return instanceRef.current;
    }
  };
}
var useLoading = useLoadingController;

// src/index.ts
var import_loading_core4 = require("@stackline/loading-core");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Loading,
  LoadingOverlay,
  applyThemeTokens,
  createLoader,
  darkTheme,
  defaultLoaderOptions,
  getLoaderStyles,
  getVariantDefinition,
  getVariantStyles,
  hideLoader,
  hydrateLoaders,
  lightTheme,
  loaderVariants,
  mountLoader,
  showLoader,
  useLoading,
  useLoadingController
});
//# sourceMappingURL=index.cjs.map