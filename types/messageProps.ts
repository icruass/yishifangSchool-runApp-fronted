export type MessageProps = {
	'animation' ?: boolean;
	'is-mask-click' ?: boolean,
	'mask-background-color' ?: string,
	'background-color' ?: string,
	'safe-area' ?: boolean;
	'type' ?: 'success' | 'error' | 'warn' | 'info';
	'duration' ?: number;
	'text' ?: string;

	'change' ?: any;
	'maskClick' ?: any;
};

export const defaultMessageProps = {
	'animation': true,
	'is-mask-click': true,
	'mask-background-color': '',
	'background-color': '',
	'safe-area': true,
	'type': 'success',
	'duration': 2000,
	'text': '',

	'change': undefined,
	'maskClick': undefined,
};