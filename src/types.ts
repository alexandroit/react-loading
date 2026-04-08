import type { HTMLAttributes, ReactNode } from 'react';
import type { LoaderInstance, LoaderOptions, LoaderTarget } from '@stackline/loading';

export type ReactLoadingOptions = LoaderOptions;

export interface LoadingLifecycleCallbacks {
  onCreate?: (instance: LoaderInstance) => void;
  onShown?: (instance: LoaderInstance) => void;
  onHidden?: (instance: LoaderInstance) => void;
  onUpdated?: (instance: LoaderInstance) => void;
  onDestroyed?: (instance: LoaderInstance) => void;
}

export interface LoadingHandle {
  getInstance(): LoaderInstance | null;
  show(): Promise<void>;
  hide(): Promise<void>;
  toggle(force?: boolean): Promise<void>;
  update(options: Partial<ReactLoadingOptions>): void;
  destroy(): void;
}

export interface LoadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    LoadingLifecycleCallbacks {
  options?: ReactLoadingOptions;
  visible?: boolean;
}

export interface LoadingOverlayProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    LoadingLifecycleCallbacks {
  children?: ReactNode;
  options?: ReactLoadingOptions;
  visible?: boolean;
}

export interface UseLoadingControllerResult {
  create(target?: LoaderTarget, options?: ReactLoadingOptions): LoaderInstance;
  mount(target?: LoaderTarget, options?: ReactLoadingOptions): LoaderInstance;
  show(target?: LoaderTarget, options?: ReactLoadingOptions): Promise<LoaderInstance>;
  hide(): Promise<void>;
  toggle(force?: boolean): Promise<void>;
  update(options: Partial<ReactLoadingOptions>): LoaderInstance | null;
  destroy(): void;
  getInstance(): LoaderInstance | null;
}
