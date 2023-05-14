import type { ExtendRequestOptions, RequestResult } from './request';
import request from './request';
import { reactive, onMounted } from 'vue';

export type UseRequestOptions = ExtendRequestOptions & {
  // 是否手动发送接口, 默认是false,会在初始化onMounted里自动发送一次接口.
  manual?: boolean;
  // 初始数据, 不传的话默认是undefined.
  defaultData?: any;
  // 初始参数, 只会在manual为false时首次请求带上参数.
  defaultParams?: any;
  // 固定参数, 每次请求都会带上的参数.
  params?: any;
  // format传false禁用默认格式化, 返回请求原本的数据, 为true使用默认格式化, 传函数则自定义格式化.
  format?: boolean | ((res: any) => any);
};

// useRequest返回的数据
export type UseRequestReturn = {
  // 请求的传的参数.
  params: any;
  // 请求返回的并格式化后的数据.
  data: any;
  // 请求是否加载中.
  loading: boolean;
  // 请求返回的未格式化的数据.
  response: any;
  // 请求函数, 不参与reactive数据.
  fetchFn: (params?: any) => RequestResult;
  // 请求函数, 请求会设置更新reactive数据.
  run: (params?: any) => RequestResult;
}

function useRequest(options: UseRequestOptions): UseRequestReturn {
  const {
    manual,
    defaultData,
    defaultParams,
    params,
    format,
    ...restOptions
  } = options;

  const fetchFn = (fetchParams?: any) => {
    const options: ExtendRequestOptions = {
      ...restOptions,
      complete: (res) => {
        state.response = res;
      },
      data: fetchParams,
    };
    return request(options);
  };

  const run = async (fetchParams?: Object) => {
    const _fetchParams = {
      ...params,
      ...fetchParams,
    };
    state.params = _fetchParams;
    state.loading = true;
    const formattedData = await fetchFn(_fetchParams);
    state.loading = false;
    state.data = formattedData;
    return formattedData;
  };

  const state = reactive({ params: {}, data: defaultData, response: {}, loading: false, fetchFn, run });

  onMounted(() => {
    if (manual !== true) {
      run(defaultParams);
    }
  });

  return state;
}

export default useRequest;