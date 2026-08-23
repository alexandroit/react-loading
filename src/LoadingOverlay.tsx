import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type MutableRefObject
} from 'react';
import { createLoader, type LoaderInstance } from '@stackline/loading-core';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import type {
  LoadingHandle,
  LoadingOverlayProps,
  ReactLoadingOptions
} from './types';

function ensureOverlayLoader(
  hostRef: MutableRefObject<HTMLDivElement | null>,
  options: ReactLoadingOptions,
  instanceRef: MutableRefObject<LoaderInstance | null>
): LoaderInstance | null {
  if (!hostRef.current) {
    return null;
  }

  const mergedOptions: ReactLoadingOptions = {
    overlay: true,
    centered: true,
    ...options,
    target: hostRef.current
  };

  if (!instanceRef.current) {
    instanceRef.current = createLoader({
      ...mergedOptions,
      visible: false
    });
    return instanceRef.current;
  }

  instanceRef.current.update(mergedOptions);
  return instanceRef.current;
}

export const LoadingOverlay = forwardRef<LoadingHandle, LoadingOverlayProps>(
  function LoadingOverlay(
    {
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
    },
    forwardedRef
  ) {
    const hostRef = useRef<HTMLDivElement | null>(null);
    const instanceRef = useRef<LoaderInstance | null>(null);

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
        toggle(force?: boolean) {
          return instanceRef.current ? instanceRef.current.toggle(force) : Promise.resolve();
        },
        update(nextOptions: Partial<ReactLoadingOptions>) {
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

    useEffect(() => {
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

    return (
      <div
        ref={hostRef}
        style={{
          position: 'relative',
          ...style
        }}
        {...hostProps}
      >
        {children}
      </div>
    );
  }
);
