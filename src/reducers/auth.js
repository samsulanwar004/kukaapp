export default function auth(state = [], action) {
	switch (action.type) {
		case 'LOGIN':
			return {
				isLogin: true,
				token: action.token
			}
		case 'LOGOUT':
			return {
				isLogin: false,
				token: null
			}
		default:
			return state
	}
}