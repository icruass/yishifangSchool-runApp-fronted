export type MessageOptions = {
	duration ?: number,
	type ?: 'success' | 'error' | 'info' | 'warn',
	text ?: string,
};

export type MessageUtilFn = (text ?: string, duration ?: number, options ?: MessageOptions) => void;

export type MessageUtilFnObj = {
	success : MessageUtilFn;
	error : MessageUtilFn;
	info : MessageUtilFn;
	warn : MessageUtilFn;
};

