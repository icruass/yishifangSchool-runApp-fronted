export type RequestOptions = UniApp.RequestOptions & { getRequestTask?: (requestTask: UniApp.RequestTask) => void; params?: UniApp.RequestOptions['data'] };

export type RequestOptionsNoRquired = Omit<RequestOptions, 'url'> & { url?: RequestOptions['url'] };

export type RequestResultResolved = UniApp.RequestSuccessCallbackResult;

export type RequestResult = Promise<RequestResultResolved>;

export type ExtendRequestOptions = RequestOptions & {
  format?: ((res: UniApp.RequestSuccessCallbackResult) => any); // format为true则默认格式化数据, 为false则禁用默认格式化, 返回请求原本的数据; 为函数则调用函数格式化数据.
  getResSuccess?: (res: UniApp.RequestSuccessCallbackResult) => boolean; // 设置请求成功的条件.
  onSuccess?: (formatData: any, res: UniApp.RequestSuccessCallbackResult) => void; // 请求后getResSuccess返回值为true则回调执行.
  onFail?: (res: UniApp.RequestSuccessCallbackResult) => void; // 请求后getResSuccess返回值为false则回调执行.
};

/*
将uni.request promise化, 调用方式为:
async () => {
  const res = await request({ url: 'xxx', method: 'GET' });
}
*/
export const promiseUniRequest = (options: RequestOptions): RequestResult => {
  const { getRequestTask, ...restOptions } = options;
  return new Promise((resolve) => {
    const _options: UniApp.RequestOptions = {
      ...restOptions,
      complete: function (res) {
        resolve(res as any);
        if (options && options.complete) {
          options.complete(res);
        };
      },
      success: function (res) {
        resolve(res);
        if (options && options.success) {
          options.success(res);
        };
      },
    };
    const requestTask = uni.request(_options);
    if (getRequestTask) {
      getRequestTask(requestTask);
    }
  });
};


/*
根据项目扩展uni.request.
*/
export const extendUniRequest = async (options: ExtendRequestOptions): RequestResult => {
  const { format, getResSuccess, success, onSuccess, onFail, ...restOptions } = options;

  let formatResData: any;

  const successInternal: RequestOptions['success'] = (res: RequestResultResolved) => {
    if (success) success(res);

    const isSuccess = getResSuccess ? getResSuccess(res) : true;

    if (isSuccess) {
      if (onSuccess) {
        onSuccess(formatResData, res);
      };
    };

    if (!isSuccess) {
      if (onFail) {
        onFail(res);
      };
    };
  };

  const _options: RequestOptions = {
    ...restOptions,
    success: successInternal,
  };

  const res = await promiseUniRequest(_options);

  formatResData = res;

  if (typeof format === 'function') {
    formatResData = format(res);
  };

  return formatResData;
};


/*
request工厂函数, 用来固定一些参数, 调用返回一个request函数, 调用方式为:
const request = generateRquestInstance({
  timeout: 5000, // 固定 timeout 参数
});
request({ url: 'xxxx', method: 'get' })
*/
export const generateRquestInstance = (getOptionsFn: (options: ExtendRequestOptions) => RequestOptionsNoRquired) => {
  return (options: ExtendRequestOptions) => {
    const _options = {
      ...getOptionsFn(options),
      ...options,
    };
    return extendUniRequest(_options);
  };
};


/*
工厂函数生成的一个实例, 适用项目大部分请求. 调用方式为:
request({ url: 'xxxx', method: 'get' });
此请求固定了参数 timeout,  dataType,  withCredentials, 
*/
const commonRequestConfig = {
  timeout: 5000,
  dataType: 'json',
  withCredentials: true,
  getResSuccess: (res: RequestResultResolved) => {
    return res && res.data && (res.data as any).code == 0;
  },
  format: (res: RequestResultResolved) => {
    const formattedRes = res && res.data && (res.data as any).data;
    return formattedRes;
  },
};
const commonRequestInstance = generateRquestInstance(() => {
  return commonRequestConfig;
});
export const request = commonRequestInstance;
export default request;

// uni.request参数参考: https://uniapp.dcloud.net.cn/api/request/request.html#request