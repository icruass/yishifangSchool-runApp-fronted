import type { RequestResult, ExtendRequestOptions } from './request';
import type { UseRequestReturn, UseRequestOptions } from './useRequest';

import request from './request';
import useRequest from './useRequest';

const API = {};

addApi(API, 'getNameList', { url: '/api/talentsServices/getFinaceJobFairlist.do', method: 'GET' });

addApi(API, 'getUserList', { url: '/api/talentsServices/getFinaceJobFairlist.do', method: 'POST' });

addApi(API, 'login', { url: 'http://192.168.2.32:8089/login', method: 'POST' });

export type FetchFn = (options ?: Omit<ExtendRequestOptions, 'url'>) => RequestResult;
export type UseRequestFn = (options ?: Omit<UseRequestOptions, 'url'>) => UseRequestReturn;

export function addApi<T, N extends string, U extends ExtendRequestOptions>(target : T, name : N, options : U) : asserts target is T & Record<N, { request : FetchFn, useRequest : UseRequestFn }> {
	const fetchFn = (o : ExtendRequestOptions) => {
		return request({ ...options, ...o });
	};
	const useRequestFn = (o : UseRequestOptions) => {
		return useRequest({ ...options, ...o })
	}
	Object.assign(target as any, { [name]: { request: fetchFn, useRequest: useRequestFn } });
};

type APIType = typeof API;

export default API as APIType;