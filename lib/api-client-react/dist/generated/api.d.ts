import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AdminLoginInput, AdminSession, AdminStats, App, AppInput, AppPatch, Category, CategoryInput, CategoryPatch, CategoryWithApps, HealthStatus, ListAppsParams, ListPopularAppsParams, ListRecentAppsParams, SiteSettings, SiteSettingsInput, UploadInput, UploadResult } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListCategoriesUrl: () => string;
/**
 * @summary List all categories
 */
export declare const listCategories: (options?: RequestInit) => Promise<Category[]>;
export declare const getListCategoriesQueryKey: () => readonly ["/api/categories"];
export declare const getListCategoriesQueryOptions: <TData = Awaited<ReturnType<typeof listCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof listCategories>>>;
export type ListCategoriesQueryError = ErrorType<unknown>;
/**
 * @summary List all categories
 */
export declare function useListCategories<TData = Awaited<ReturnType<typeof listCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateCategoryUrl: () => string;
/**
 * @summary Create a new category (admin)
 */
export declare const createCategory: (categoryInput: CategoryInput, options?: RequestInit) => Promise<Category>;
export declare const getCreateCategoryMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
        data: BodyType<CategoryInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
    data: BodyType<CategoryInput>;
}, TContext>;
export type CreateCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof createCategory>>>;
export type CreateCategoryMutationBody = BodyType<CategoryInput>;
export type CreateCategoryMutationError = ErrorType<void>;
/**
* @summary Create a new category (admin)
*/
export declare const useCreateCategory: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCategory>>, TError, {
        data: BodyType<CategoryInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createCategory>>, TError, {
    data: BodyType<CategoryInput>;
}, TContext>;
export declare const getGetCategoryUrl: (id: number) => string;
/**
 * @summary Get a single category with its apps
 */
export declare const getCategory: (id: number, options?: RequestInit) => Promise<CategoryWithApps>;
export declare const getGetCategoryQueryKey: (id: number) => readonly [`/api/categories/${number}`];
export declare const getGetCategoryQueryOptions: <TData = Awaited<ReturnType<typeof getCategory>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCategoryQueryResult = NonNullable<Awaited<ReturnType<typeof getCategory>>>;
export type GetCategoryQueryError = ErrorType<void>;
/**
 * @summary Get a single category with its apps
 */
export declare function useGetCategory<TData = Awaited<ReturnType<typeof getCategory>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCategory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateCategoryUrl: (id: number) => string;
/**
 * @summary Update a category (admin)
 */
export declare const updateCategory: (id: number, categoryPatch: CategoryPatch, options?: RequestInit) => Promise<Category>;
export declare const getUpdateCategoryMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError, {
        id: number;
        data: BodyType<CategoryPatch>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError, {
    id: number;
    data: BodyType<CategoryPatch>;
}, TContext>;
export type UpdateCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof updateCategory>>>;
export type UpdateCategoryMutationBody = BodyType<CategoryPatch>;
export type UpdateCategoryMutationError = ErrorType<void>;
/**
* @summary Update a category (admin)
*/
export declare const useUpdateCategory: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCategory>>, TError, {
        id: number;
        data: BodyType<CategoryPatch>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateCategory>>, TError, {
    id: number;
    data: BodyType<CategoryPatch>;
}, TContext>;
export declare const getDeleteCategoryUrl: (id: number) => string;
/**
 * @summary Delete a category (admin)
 */
export declare const deleteCategory: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteCategoryMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
    id: number;
}, TContext>;
export type DeleteCategoryMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCategory>>>;
export type DeleteCategoryMutationError = ErrorType<void>;
/**
* @summary Delete a category (admin)
*/
export declare const useDeleteCategory: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCategory>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteCategory>>, TError, {
    id: number;
}, TContext>;
export declare const getListAppsUrl: (params?: ListAppsParams) => string;
/**
 * @summary List apps with optional filters
 */
export declare const listApps: (params?: ListAppsParams, options?: RequestInit) => Promise<App[]>;
export declare const getListAppsQueryKey: (params?: ListAppsParams) => readonly ["/api/apps", ...ListAppsParams[]];
export declare const getListAppsQueryOptions: <TData = Awaited<ReturnType<typeof listApps>>, TError = ErrorType<unknown>>(params?: ListAppsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listApps>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listApps>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAppsQueryResult = NonNullable<Awaited<ReturnType<typeof listApps>>>;
export type ListAppsQueryError = ErrorType<unknown>;
/**
 * @summary List apps with optional filters
 */
export declare function useListApps<TData = Awaited<ReturnType<typeof listApps>>, TError = ErrorType<unknown>>(params?: ListAppsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listApps>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateAppUrl: () => string;
/**
 * @summary Create a new app (admin)
 */
export declare const createApp: (appInput: AppInput, options?: RequestInit) => Promise<App>;
export declare const getCreateAppMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createApp>>, TError, {
        data: BodyType<AppInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createApp>>, TError, {
    data: BodyType<AppInput>;
}, TContext>;
export type CreateAppMutationResult = NonNullable<Awaited<ReturnType<typeof createApp>>>;
export type CreateAppMutationBody = BodyType<AppInput>;
export type CreateAppMutationError = ErrorType<void>;
/**
* @summary Create a new app (admin)
*/
export declare const useCreateApp: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createApp>>, TError, {
        data: BodyType<AppInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createApp>>, TError, {
    data: BodyType<AppInput>;
}, TContext>;
export declare const getDeleteAllAppsUrl: () => string;
/**
 * @summary Delete all apps (admin)
 */
export declare const deleteAllApps: (options?: RequestInit) => Promise<void>;
export declare const getDeleteAllAppsMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAllApps>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAllApps>>, TError, void, TContext>;
export type DeleteAllAppsMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAllApps>>>;
export type DeleteAllAppsMutationError = ErrorType<void>;
/**
* @summary Delete all apps (admin)
*/
export declare const useDeleteAllApps: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAllApps>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAllApps>>, TError, void, TContext>;
export declare const getListFeaturedAppsUrl: () => string;
/**
 * @summary Get featured apps
 */
export declare const listFeaturedApps: (options?: RequestInit) => Promise<App[]>;
export declare const getListFeaturedAppsQueryKey: () => readonly ["/api/apps/featured"];
export declare const getListFeaturedAppsQueryOptions: <TData = Awaited<ReturnType<typeof listFeaturedApps>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFeaturedApps>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listFeaturedApps>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListFeaturedAppsQueryResult = NonNullable<Awaited<ReturnType<typeof listFeaturedApps>>>;
export type ListFeaturedAppsQueryError = ErrorType<unknown>;
/**
 * @summary Get featured apps
 */
export declare function useListFeaturedApps<TData = Awaited<ReturnType<typeof listFeaturedApps>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listFeaturedApps>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListRecentAppsUrl: (params?: ListRecentAppsParams) => string;
/**
 * @summary Get recently added apps
 */
export declare const listRecentApps: (params?: ListRecentAppsParams, options?: RequestInit) => Promise<App[]>;
export declare const getListRecentAppsQueryKey: (params?: ListRecentAppsParams) => readonly ["/api/apps/recent", ...ListRecentAppsParams[]];
export declare const getListRecentAppsQueryOptions: <TData = Awaited<ReturnType<typeof listRecentApps>>, TError = ErrorType<unknown>>(params?: ListRecentAppsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRecentApps>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listRecentApps>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListRecentAppsQueryResult = NonNullable<Awaited<ReturnType<typeof listRecentApps>>>;
export type ListRecentAppsQueryError = ErrorType<unknown>;
/**
 * @summary Get recently added apps
 */
export declare function useListRecentApps<TData = Awaited<ReturnType<typeof listRecentApps>>, TError = ErrorType<unknown>>(params?: ListRecentAppsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listRecentApps>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListPopularAppsUrl: (params?: ListPopularAppsParams) => string;
/**
 * @summary Get popular apps sorted by click count
 */
export declare const listPopularApps: (params?: ListPopularAppsParams, options?: RequestInit) => Promise<App[]>;
export declare const getListPopularAppsQueryKey: (params?: ListPopularAppsParams) => readonly ["/api/apps/popular", ...ListPopularAppsParams[]];
export declare const getListPopularAppsQueryOptions: <TData = Awaited<ReturnType<typeof listPopularApps>>, TError = ErrorType<unknown>>(params?: ListPopularAppsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPopularApps>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPopularApps>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPopularAppsQueryResult = NonNullable<Awaited<ReturnType<typeof listPopularApps>>>;
export type ListPopularAppsQueryError = ErrorType<unknown>;
/**
 * @summary Get popular apps sorted by click count
 */
export declare function useListPopularApps<TData = Awaited<ReturnType<typeof listPopularApps>>, TError = ErrorType<unknown>>(params?: ListPopularAppsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPopularApps>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAppUrl: (id: number) => string;
/**
 * @summary Get a single app
 */
export declare const getApp: (id: number, options?: RequestInit) => Promise<App>;
export declare const getGetAppQueryKey: (id: number) => readonly [`/api/apps/${number}`];
export declare const getGetAppQueryOptions: <TData = Awaited<ReturnType<typeof getApp>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getApp>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getApp>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAppQueryResult = NonNullable<Awaited<ReturnType<typeof getApp>>>;
export type GetAppQueryError = ErrorType<void>;
/**
 * @summary Get a single app
 */
export declare function useGetApp<TData = Awaited<ReturnType<typeof getApp>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getApp>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateAppUrl: (id: number) => string;
/**
 * @summary Update an app (admin)
 */
export declare const updateApp: (id: number, appPatch: AppPatch, options?: RequestInit) => Promise<App>;
export declare const getUpdateAppMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateApp>>, TError, {
        id: number;
        data: BodyType<AppPatch>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateApp>>, TError, {
    id: number;
    data: BodyType<AppPatch>;
}, TContext>;
export type UpdateAppMutationResult = NonNullable<Awaited<ReturnType<typeof updateApp>>>;
export type UpdateAppMutationBody = BodyType<AppPatch>;
export type UpdateAppMutationError = ErrorType<void>;
/**
* @summary Update an app (admin)
*/
export declare const useUpdateApp: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateApp>>, TError, {
        id: number;
        data: BodyType<AppPatch>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateApp>>, TError, {
    id: number;
    data: BodyType<AppPatch>;
}, TContext>;
export declare const getDeleteAppUrl: (id: number) => string;
/**
 * @summary Delete an app (admin)
 */
export declare const deleteApp: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteAppMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteApp>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteApp>>, TError, {
    id: number;
}, TContext>;
export type DeleteAppMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApp>>>;
export type DeleteAppMutationError = ErrorType<void>;
/**
* @summary Delete an app (admin)
*/
export declare const useDeleteApp: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteApp>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteApp>>, TError, {
    id: number;
}, TContext>;
export declare const getTrackAppClickUrl: (id: number) => string;
/**
 * @summary Increment click count for an app
 */
export declare const trackAppClick: (id: number, options?: RequestInit) => Promise<App>;
export declare const getTrackAppClickMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof trackAppClick>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof trackAppClick>>, TError, {
    id: number;
}, TContext>;
export type TrackAppClickMutationResult = NonNullable<Awaited<ReturnType<typeof trackAppClick>>>;
export type TrackAppClickMutationError = ErrorType<unknown>;
/**
* @summary Increment click count for an app
*/
export declare const useTrackAppClick: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof trackAppClick>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof trackAppClick>>, TError, {
    id: number;
}, TContext>;
export declare const getAdminLoginUrl: () => string;
/**
 * @summary Admin login
 */
export declare const adminLogin: (adminLoginInput: AdminLoginInput, options?: RequestInit) => Promise<AdminSession>;
export declare const getAdminLoginMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<AdminLoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<AdminLoginInput>;
}, TContext>;
export type AdminLoginMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogin>>>;
export type AdminLoginMutationBody = BodyType<AdminLoginInput>;
export type AdminLoginMutationError = ErrorType<void>;
/**
* @summary Admin login
*/
export declare const useAdminLogin: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<AdminLoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<AdminLoginInput>;
}, TContext>;
export declare const getAdminLogoutUrl: () => string;
/**
 * @summary Admin logout
 */
export declare const adminLogout: (options?: RequestInit) => Promise<void>;
export declare const getAdminLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
export type AdminLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogout>>>;
export type AdminLogoutMutationError = ErrorType<unknown>;
/**
* @summary Admin logout
*/
export declare const useAdminLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
export declare const getAdminMeUrl: () => string;
/**
 * @summary Get current admin session
 */
export declare const adminMe: (options?: RequestInit) => Promise<AdminSession>;
export declare const getAdminMeQueryKey: () => readonly ["/api/admin/me"];
export declare const getAdminMeQueryOptions: <TData = Awaited<ReturnType<typeof adminMe>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof adminMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type AdminMeQueryResult = NonNullable<Awaited<ReturnType<typeof adminMe>>>;
export type AdminMeQueryError = ErrorType<void>;
/**
 * @summary Get current admin session
 */
export declare function useAdminMe<TData = Awaited<ReturnType<typeof adminMe>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof adminMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetStatsUrl: () => string;
/**
 * @summary Get dashboard stats for admin
 */
export declare const getStats: (options?: RequestInit) => Promise<AdminStats>;
export declare const getGetStatsQueryKey: () => readonly ["/api/admin/stats"];
export declare const getGetStatsQueryOptions: <TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getStats>>>;
export type GetStatsQueryError = ErrorType<void>;
/**
 * @summary Get dashboard stats for admin
 */
export declare function useGetStats<TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUploadIconUrl: () => string;
/**
 * @summary Upload an icon/image for an app
 */
export declare const uploadIcon: (uploadInput: UploadInput, options?: RequestInit) => Promise<UploadResult>;
export declare const getUploadIconMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadIcon>>, TError, {
        data: BodyType<UploadInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof uploadIcon>>, TError, {
    data: BodyType<UploadInput>;
}, TContext>;
export type UploadIconMutationResult = NonNullable<Awaited<ReturnType<typeof uploadIcon>>>;
export type UploadIconMutationBody = BodyType<UploadInput>;
export type UploadIconMutationError = ErrorType<void>;
/**
* @summary Upload an icon/image for an app
*/
export declare const useUploadIcon: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof uploadIcon>>, TError, {
        data: BodyType<UploadInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof uploadIcon>>, TError, {
    data: BodyType<UploadInput>;
}, TContext>;
export declare const getGetSettingsUrl: () => string;
/**
 * @summary Get site settings (public)
 */
export declare const getSettings: (options?: RequestInit) => Promise<SiteSettings>;
export declare const getGetSettingsQueryKey: () => readonly ["/api/settings"];
export declare const getGetSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getSettings>>>;
export type GetSettingsQueryError = ErrorType<unknown>;
/**
 * @summary Get site settings (public)
 */
export declare function useGetSettings<TData = Awaited<ReturnType<typeof getSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateSettingsUrl: () => string;
/**
 * @summary Update site settings (admin)
 */
export declare const updateSettings: (siteSettingsInput: SiteSettingsInput, options?: RequestInit) => Promise<SiteSettings>;
export declare const getUpdateSettingsMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
        data: BodyType<SiteSettingsInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
    data: BodyType<SiteSettingsInput>;
}, TContext>;
export type UpdateSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof updateSettings>>>;
export type UpdateSettingsMutationBody = BodyType<SiteSettingsInput>;
export type UpdateSettingsMutationError = ErrorType<void>;
/**
* @summary Update site settings (admin)
*/
export declare const useUpdateSettings: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateSettings>>, TError, {
        data: BodyType<SiteSettingsInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateSettings>>, TError, {
    data: BodyType<SiteSettingsInput>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map