export type BasicInputProps = {
	'type' ?: 'text' | 'number' | 'idcard' | 'digit' | 'tel' | 'safe-password' | 'password';
	'value' ?: any;
	'style' ?: any;
	'class' ?: any;
	'primaryColor' ?: any;
	'modelValue' : any;
	'clearable' ?: any;
	'autoHeight' ?: any;
	'confirmType' ?: any;
	'clearSize' ?: any;
	'prefixIcon' ?: any;
	'suffixIcon' ?: any;
	'trim' ?: any;
	'inputBorder' ?: any;
	'styles' ?: any;
	'passwordIcon' ?: any;
	'text-content-type' ?: any;
	'password' ?: boolean;
	'placeholder' ?: any;
	'placeholder-style' ?: any;
	'placeholder-class' ?: any;
	'disabled' ?: boolean;
	'maxlength' ?: number;
	'cursor-spacing' ?: number;
	'autoFocus' ?: boolean;
	'confirm-type' ?: any;
	'confirm-hold' ?: any;
	'cursor' ?: any;
	'selection-start' ?: any;
	'selection-end' ?: any;
	'adjust-position' ?: any;
	'auto-blur' ?: any;
	'ignoreCompositionEvent' ?: any;
	'always-embed' ?: any;
	'hold-keyboard' ?: any;
	'inputmode' ?: any;
	'input' ?: any;
	'focus' ?: any;
	'blur' ?: any;
	'confirm' ?: any;
	'keyboardheightchange' ?: any;
	'change' ?: any;
	'clear' ?: any;
	'iconClick' ?: any;
	'update:modelValue' ?: any;
};

export const defaultBasicInputProps = {
	'type': 'text',
	'value': '',
	'style': '',
	'class': '',
	'primaryColor': '',
	'modelValue': '',
	'clearable': '',
	'autoHeight': '',
	'confirmType': '',
	'clearSize': '',
	'prefixIcon': '',
	'suffixIcon': '',
	'trim': '',
	'inputBorder': '',
	'styles': undefined,
	'passwordIcon': '',
	'text-content-type': '',
	'password': false,
	'placeholder': '',
	'placeholder-style': '',
	'placeholder-class': '',
	'disabled': false,
	'maxlength': undefined,
	'cursor-spacing': undefined,
	'autoFocus': false,
	'confirm-type': '',
	'confirm-hold': '',
	'cursor': '',
	'selection-start': '',
	'selection-end': '',
	'adjust-position': '',
	'auto-blur': '',
	'ignoreCompositionEvent': '',
	'always-embed': '',
	'hold-keyboard': '',
	'inputmode': '',
	'input': '',
	'focus': '',
	'blur': '',
	'confirm': '',
	'keyboardheightchange': '',
	'change': '',
	'clear': '',
	'iconClick': '',
	'update:modelValue': '',
};