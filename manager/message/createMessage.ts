import message from './messageUtilFn';

import { MessageOptions } from './types';

export type CreateMessageOptions = MessageOptions & {
	getText ?: (params : Record<string, any>) => string;
}

export type ReturnFnOptions = MessageOptions & {
	getTextParams ?: Record<string, any>;
}

export type CreateMessageReturnFn = (p1 ?: string | ReturnFnOptions) => any;

function createMessage<T, N extends string, O extends CreateMessageOptions>(target : T, name : N, o : O) : asserts target is T & Record<N, CreateMessageReturnFn> {
	const options = (o || {}) as CreateMessageOptions;
	const returnFn : CreateMessageReturnFn = (p) => {
		const returnOptions = (typeof p === 'string' ? { text: p } : p || {}) as ReturnFnOptions;
		const text = options.getText ? options.getText(returnOptions.getTextParams) : returnOptions.text;
		const duration = options.duration || returnOptions.duration;
		return message(text, duration, { ...options, ...returnOptions });
	};
	Object.assign(target, { [name]: returnFn })
}

export default createMessage;