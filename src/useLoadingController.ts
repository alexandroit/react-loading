import { useEffect, useRef } from 'react';
import { createLoader, type LoaderInstance, type LoaderTarget } from '@stackline/loading';

import type {
  ReactLoadingOptions,
  UseLoadingControllerResult
} from './types';

function mergeOptions(
  baseOptions: ReactLoadingOptions,
  target: LoaderTarget,
  nextOptions?: ReactLoadingOptions
): ReactLoadingOptions {
  const mergedOptions: ReactLoadingOptions = {
    ...baseOptions,
    ...(nextOptions || {})
  };

  if (typeof target !== 'undefined') {
    mergedOptions.target = target;
  }

  return mergedOptions;
}

export function useLoadingController(
  defaultOptions: ReactLoadingOptions = {}
): UseLoadingControllerResult {
  const instanceRef = useRef<LoaderInstance | null>(null);
  const defaultOptionsRef = useRef(defaultOptions);

  defaultOptionsRef.current = defaultOptions;

  useEffect(() => {
    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, []);

  function ensureInstance(
    target?: LoaderTarget,
    nextOptions?: ReactLoadingOptions
  ): LoaderInstance {
    const mergedOptions = mergeOptions(defaultOptionsRef.current, target, nextOptions);

    if (!instanceRef.current) {
      instanceRef.current = createLoader({
        ...mergedOptions,
        visible: false
      });
      return instanceRef.current;
    }

    if (typeof mergedOptions.target !== 'undefined') {
      instanceRef.current.mount(mergedOptions.target);
    }

    instanceRef.current.update(mergedOptions);
    return instanceRef.current;
  }

  return {
    create(target?: LoaderTarget, nextOptions?: ReactLoadingOptions) {
      return ensureInstance(target, nextOptions);
    },
    mount(target?: LoaderTarget, nextOptions?: ReactLoadingOptions) {
      return ensureInstance(target, nextOptions);
    },
    async show(target?: LoaderTarget, nextOptions?: ReactLoadingOptions) {
      const instance = ensureInstance(target, nextOptions);
      await instance.show();
      return instance;
    },
    hide() {
      return instanceRef.current ? instanceRef.current.hide() : Promise.resolve();
    },
    toggle(force?: boolean) {
      return instanceRef.current ? instanceRef.current.toggle(force) : Promise.resolve();
    },
    update(nextOptions: Partial<ReactLoadingOptions>) {
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

export const useLoading = useLoadingController;
