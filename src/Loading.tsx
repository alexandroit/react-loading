import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type MutableRefObject
} from 'react';
import { createLoader, type LoaderInstance } from '@stackline/loading-core';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import type { LoadingHandle, LoadingProps, ReactLoadingOptions } from './types';

function createManagedLoader(
  hostRef: MutableRefObject<HTMLDivElement | null>,
  options: ReactLoadingOptions,
  instanceRef: MutableRefObject<LoaderInstance | null>
): LoaderInstance | null {
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

export const Loading = forwardRef<LoadingHandle, LoadingProps>(function Loading(
  {
    options = {},
    visible = true,
    onCreate,
    onShown,
    onHidden,
    onUpdated,
    onDestroyed,
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

  useEffect(() => {
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

  return <div ref={hostRef} {...hostProps} />;
});
