// src/Loading.tsx
import {
  forwardRef,
  useEffect as useEffect2,
  useImperativeHandle,
  useRef
} from "react";
import { createLoader } from "@revivejs/loading";

// src/useIsomorphicLayoutEffect.ts
import { useEffect, useLayoutEffect } from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// src/Loading.tsx
import { jsx } from "react/jsx-runtime";
function createManagedLoader(hostRef, options, instanceRef) {
  if (!hostRef.current) {
    return null;
  }
  if (!instanceRef.current) {
    instanceRef.current = createLoader({
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
var Loading = forwardRef(function Loading2({
  options = {},
  visible = true,
  onCreate,
  onShown,
  onHidden,
  onUpdated,
  onDestroyed,
  ...hostProps
}, forwardedRef) {
  const hostRef = useRef(null);
  const instanceRef = useRef(null);
  useImperativeHandle(
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
  useEffect2(() => {
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
  return /* @__PURE__ */ jsx("div", { ref: hostRef, ...hostProps });
});

// src/LoadingOverlay.tsx
import {
  forwardRef as forwardRef2,
  useEffect as useEffect3,
  useImperativeHandle as useImperativeHandle2,
  useRef as useRef2
} from "react";
import { createLoader as createLoader2 } from "@revivejs/loading";
import { jsx as jsx2 } from "react/jsx-runtime";
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
    instanceRef.current = createLoader2({
      ...mergedOptions,
      visible: false
    });
    return instanceRef.current;
  }
  instanceRef.current.update(mergedOptions);
  return instanceRef.current;
}
var LoadingOverlay = forwardRef2(
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
    const hostRef = useRef2(null);
    const instanceRef = useRef2(null);
    useImperativeHandle2(
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
    useEffect3(() => {
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
    return /* @__PURE__ */ jsx2(
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
import { useEffect as useEffect4, useRef as useRef3 } from "react";
import { createLoader as createLoader3 } from "@revivejs/loading";
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
  const instanceRef = useRef3(null);
  const defaultOptionsRef = useRef3(defaultOptions);
  defaultOptionsRef.current = defaultOptions;
  useEffect4(() => {
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
      instanceRef.current = createLoader3({
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
import {
  applyThemeTokens,
  createLoader as createLoader4,
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
  showLoader
} from "@revivejs/loading";
export {
  Loading,
  LoadingOverlay,
  applyThemeTokens,
  createLoader4 as createLoader,
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
};
//# sourceMappingURL=index.js.map