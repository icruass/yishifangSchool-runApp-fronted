import { useMessageStore } from './messageStore';
import { type MessageOptions, type MessageUtilFn, type MessageUtilFnObj } from './types';

const globalMessage = (text ?: string, duration ?: number, options ?: MessageOptions) => {
	const ref = useMessageStore.getState().globalMessageRef;
	if (!(ref && ref.open)) {
		console.error('$refs globalMessageRef is not exist', ref);
		return ref;
	};

	ref.open();

	const globalMessageOptions = useMessageStore.getState().globalMessageOptions;
	const newOptions = {
		...globalMessageOptions,
		text,
		duration,
		...options,
	};
	useMessageStore.getState().setGlobalMessageOptions(newOptions);
	return ref;
};

export function addMethods<T extends MessageUtilFn>(fn : T) : asserts fn is T & MessageUtilFnObj {
	(fn as any).success = (text ?: string, duration ?: number, options ?: MessageOptions) => {
		return fn(text, duration, { ...options, type: 'success' });
	};
	(fn as any).error = function (text ?: string, duration ?: number, options ?: MessageOptions) {
		return fn(text, duration, { ...options, type: 'error' });
	};
	(fn as any).info = function (text ?: string, duration ?: number, options ?: MessageOptions) {
		return fn(text, duration, { ...options, type: 'info' });
	};
	(fn as any).warn = function (text ?: string, duration ?: number, options ?: MessageOptions) {
		return fn(text, duration, { ...options, type: 'warn' });
	};
};

addMethods(globalMessage);
export default globalMessage as typeof globalMessage;