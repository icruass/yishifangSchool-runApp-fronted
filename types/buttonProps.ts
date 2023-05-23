export interface ButtonProps {
	style ?: string;
	class ?: string;
	'hover-class' ?: string,
	disabled ?: boolean,
	id ?: string,
	type ?: 'default' | 'primary' | 'warn',
	size ?: 'default' | 'mini',
	plain ?: boolean,
	loading ?: boolean,
	'hover-stop-propagation' ?: boolean,
	'hover-start-time' ?: number,
	'hover-stay-time' ?: number,
	'open-type' ?: string,
	'form-type' ?: 'submit' | 'reset',
	'app-parameter' ?: string,
	lang ?: 'en' | 'zh_CN' | 'zh_TW',
	'session-from' ?: string,
	click ?: any,
	getphonenumber ?: any;
	getuserinfo ?: any;
	error ?: any;
	opensetting ?: any;
	launchapp ?: any;
	contact ?: any;
	chooseavatar ?: any;
	addgroupapp ?: any;
	chooseaddress ?: any;
	chooseinvoicetitle ?: any;
	subscribe ?: any;
	login ?: any;
	im ?: any;
};

export const defaultButtonProps = {
	style: '',
	class: '',
	'hover-class': '',
	disabled: false,
	id: '',
	type: 'default',
	size: 'default',
	plain: false,
	loading: false,
	'hover-stop-propagation': false,
	'hover-start-time': 20,
	'hover-stay-time': 70,
	'open-type': '',
	'form-type': '',
	'app-parameter': '',
	lang: 'en',
	'session-from': '',
	click: null,
	getphonenumber: null,
	getuserinfo: null,
	error: null,
	opensetting: null,
	launchapp: null,
	contact: null,
	chooseavatar: null,
	addgroupapp: null,
	chooseaddress: null,
	chooseinvoicetitle: null,
	subscribe: null,
	login: null,
	im: null,
};