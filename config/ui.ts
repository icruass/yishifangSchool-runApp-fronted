// 配置业务组件单独的UI样式.
export const UIConfig = {
	primaryColor: '#2c7fcb',
	// 登录页登陆提示文字
	'login-tip': {
		text: '登陆账号',
	},

	// 登录页用户名输入框
	'login-userName-input': {
		borderColor: 'transparent',
		borderRadius: '50px',

		color: '#000',
		bgColor: '#fafafa',

		height: '50px',
		padding: '0 0 0 20px',
		placeholder: '请输入学号 / 工号',
	},

	// 登录页密码输入框
	'login-userPassword-input': {
		borderColor: 'transparent',
		borderRadius: '50px',

		color: '#000',
		bgColor: '#fafafa',

		height: '50px',
		padding: '0 0 0 20px',
		placeholder: '请输入密码',
	},

	// 登录页登录按钮
	'login-confirm-button': {
		text: '登录',
		style: {
			'border-radius': '50px',
			'border-color': 'transparent',
			'color': '#fff',
			'background-color': '#2c7fcb',
		},
	},

	// 短途跑步开始按钮
	'run-short-start-button': {
		text: 'GO',
		style: {
			'border-radius': '50%',
			'border-color': 'transparent',
			'color': '#fff',
			'background-color': '#fe6033',
			'font-size': '26px',
			'font-weight': 'bolder',
			'letter-spacing': '4px',
			'width': '80px',
			'height': '80px',
			'display': 'flex',
			'align-items': 'center',
			'justify-content': 'center'
		},
	}
};

export default UIConfig;