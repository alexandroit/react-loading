import * as react from 'react';
import { HTMLAttributes, ReactNode } from 'react';
import { LoaderInstance, LoaderOptions, LoaderTarget } from '@stackline/loading-core';
export { LoaderAriaLive, LoaderCategory, LoaderDirection, LoaderInstance, LoaderOptions, LoaderState, LoaderTarget, LoaderThemeTokens, LoaderVariant, ResolvedLoaderOptions, StyleObject, VariantDefinition, applyThemeTokens, createLoader, darkTheme, defaultLoaderOptions, getLoaderStyles, getVariantDefinition, getVariantStyles, hideLoader, hydrateLoaders, lightTheme, loaderVariants, mountLoader, showLoader } from '@stackline/loading-core';

type ReactLoadingOptions = LoaderOptions;
interface LoadingLifecycleCallbacks {
    onCreate?: (instance: LoaderInstance) => void;
    onShown?: (instance: LoaderInstance) => void;
    onHidden?: (instance: LoaderInstance) => void;
    onUpdated?: (instance: LoaderInstance) => void;
    onDestroyed?: (instance: LoaderInstance) => void;
}
interface LoadingHandle {
    getInstance(): LoaderInstance | null;
    show(): Promise<void>;
    hide(): Promise<void>;
    toggle(force?: boolean): Promise<void>;
    update(options: Partial<ReactLoadingOptions>): void;
    destroy(): void;
}
interface LoadingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, LoadingLifecycleCallbacks {
    options?: ReactLoadingOptions;
    visible?: boolean;
}
interface LoadingOverlayProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, LoadingLifecycleCallbacks {
    children?: ReactNode;
    options?: ReactLoadingOptions;
    visible?: boolean;
}
interface UseLoadingControllerResult {
    create(target?: LoaderTarget, options?: ReactLoadingOptions): LoaderInstance;
    mount(target?: LoaderTarget, options?: ReactLoadingOptions): LoaderInstance;
    show(target?: LoaderTarget, options?: ReactLoadingOptions): Promise<LoaderInstance>;
    hide(): Promise<void>;
    toggle(force?: boolean): Promise<void>;
    update(options: Partial<ReactLoadingOptions>): LoaderInstance | null;
    destroy(): void;
    getInstance(): LoaderInstance | null;
}

declare const Loading: react.ForwardRefExoticComponent<LoadingProps & react.RefAttributes<LoadingHandle>>;

declare const LoadingOverlay: react.ForwardRefExoticComponent<LoadingOverlayProps & react.RefAttributes<LoadingHandle>>;

declare function useLoadingController(defaultOptions?: ReactLoadingOptions): UseLoadingControllerResult;
declare const useLoading: typeof useLoadingController;

export { Loading, type LoadingHandle, LoadingOverlay, type LoadingOverlayProps, type LoadingProps, type ReactLoadingOptions, type UseLoadingControllerResult, useLoading, useLoadingController };
