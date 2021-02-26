import React from 'react';

// /** 
//  * 受控组件
//  * 现用现取
//  */
// class Login extends React.Component {
// 	usernameRef = React.createRef();
// 	passwordRef = React.createRef();

// 	handleSubmit(e) {
// 		console.log(this.usernameRef);
// 		e.preventDefault();
// 		console.log(this.usernameRef.current);
// 		alert(`您输入的用户名是：${this.usernameRef.current.value}，您输入的密码是：${this.passwordRef.current.value}`)
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={(e) => this.handleSubmit(e)}>
// 				用户名：<input type="text" name="username" ref={this.usernameRef} />
// 				密码：<input type="text" name="password" ref={this.passwordRef} />
// 				<button>登陆</button>
// 			</form>
// 		)
// 	}
// }

// export { Login };

// /**
//  * 受控组件
//  * 无须ref
//  */
// class Login extends React.Component {
// 	state = {
// 		username: '',
// 		password: '',
// 	}

// 	saveUsername(e) {
// 		this.setState({
// 			username: e.target.value,
// 		})
// 	}

// 	savePassport(e) {
// 		this.setState({
// 			password: e.target.value,
// 		})
// 	}

// 	handleSubmit(e) {
// 		e.preventDefault();
// 		const { username, password } = this.state;
// 		alert(`您输入的用户名是：${username}，您输入的密码是：${password}`)
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={(e) => this.handleSubmit(e)}>
// 				用户名：<input type="text" name="username" onChange={(e) => this.saveUsername(e)} />
// 				密码：<input type="text" name="password" onChange={(e) => this.savePassport(e)} />
// 				<button>登陆</button>
// 			</form>
// 		)
// 	}
// }

// export { Login };

/** 消除重复 */
class Login extends React.Component {
	state = {
		username: '',
		password: '',
	}

	saveFormData(e, key) {
		this.setState({
			[key]: e.target.value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		const { username, password } = this.state;
		alert(`您输入的用户名是：${username}，您输入的密码是：${password}`)
	}

	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				用户名：<input type="text" name="username" onChange={(e) => this.saveFormData(e,'username')} />
				密码：<input type="text" name="password" onChange={(e) => this.saveFormData(e,'password')} />
				<button>登陆</button>
			</form>
		)
	}
}

export { Login };