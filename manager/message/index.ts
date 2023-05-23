import createMessage from './createMessage';
import { validateConfig } from '@/config';

const Messages = {};

createMessage(Messages, 'loginError', { type: 'error' });

createMessage(Messages, 'loginFailed', { type: 'error', text: validateConfig['login-failed-msg'] });

createMessage(Messages, 'loginSuccess', { type: 'success', text: validateConfig['login-success-msg'] });

type MessagesType = typeof Messages;

const MessagesExport = Messages as MessagesType

export { MessagesExport as Messages };

import message from './messageUtilFn'
import Message from './Message';
export default message;
export {
	message,
	Message,
}