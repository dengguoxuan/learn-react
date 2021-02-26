import React from 'react';

// jsx 元素渲染 组件&props
// const user = {
// 	firstName: 'Sherry',
// 	lastName: 'Deng',
// 	avatarUrl: ''
// }
// const element = <h1>Hello, {formatName(user)}!</h1>;
// const tabElement = <div tabIndex="0"></div>;
// const imgElement = <img src={user.avatarUrl} alt="用户头像" />;

// function welcome(props) {
// 	return <h1>Hello, {formatName(props)}!</h1>;
// }
// class Welcome extends React.Component {
// 	render() {
// 		return <h1>Hello, {this.props.name}</h1>;
// 	}
// }
// const welcomeClassElement = <Welcome name="sara" />

// function App() {
// 	return (
// 		<div>
// 			<Welcome name="Tom" />
// 			<Welcome name="Jerry" />
// 			<Welcome name="Jack" />
// 		</div>
// 	)
// }
// const template = (
// 	<div>
// 		{element}
// 		{getGreeting()}
// 		{getGreeting(user)}
// 		{tabElement}
// 		{imgElement}
// 		{welcome(user)}
// 		{welcomeClassElement}
// 		<App />
// 	</div>
// )

// ReactDOM.render(
// 	template,
// 	document.getElementById('root')
// );

// function formatName(user) {
// 	return `${user.firstName}${user.lastName}`
// }

// function getGreeting(user) {
// 	if (user) {
// 		return <h1>Hello, {formatName(user)}!</h1>;
// 	}
// 	return <h1>Hello, Stranger!</h1>;
// }

// state & 生命周期
// function tick() {
// 	const element = (
// 		<div>
// 			<h1>hello!</h1>
// 			<h2>it is {new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// 	ReactDOM.render(
// 		element,
// 		document.getElementById('root')
// 	);
// }

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { date: new Date() };
// 	}

// 	componentDidMount() {
// 		this.tiemerId = setInterval(
// 			() => this.tick(),
// 			1000
// 		);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.tiemerId);
// 	}

// 	tick() {
// 		this.setState({
// 			date: new Date()
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>hello!</h1>
// 				<h2>it is {this.state.date.toLocaleTimeString()}.</h2>
// 			</div>
// 		)
// 	}
// }

// function App() {
// 	return (
// 		<div>
// 		<Clock />
// 		<Clock />
// 		<Clock />
// 		</div>
// 	)
// }

// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// );

// 事件处理
// class Toggle extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isToggleOn: true,
// 		}

// 		// 为了在回调中使用 `this`，这个绑定是必不可少的
// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleClick() {
// 		this.setState(state => ({
// 			isToggleOn: !this.state.isToggleOn,
// 		}))
// 	}

// 	render() {
// 		return (
// 			// 每次渲染 LoggingButton 时都会创建不同的回调函数
// 			// 如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染
// 			// <button onClick={() => this.handleClick()}>
// 			<button onClick={this.handleClick}>
// 				{this.state.isToggleOn ? 'ON' : 'OFF'}
// 			</button>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Toggle />,
// 	document.getElementById('root')
// )

// 条件渲染
// function UserGreeting(props) {
// 	return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props) {
// 	return <h1>Please sing up.</h1>
// }

// function Greeting(props) {
// 	return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
// }

// function LoginButton(props) {
// 	return (
// 		<button onClick={props.onClick}>
// 			Login
// 		</button>
// 	)
// }

// function LogoutButton(props) {
// 	return (
// 		<button onClick={props.onClick}>
// 			Logout
// 		</button>
// 	)
// }

// class LoginControl extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isLoggedIn: false,
// 		}
// 		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 	}

// 	handleLoginClick() {
// 		this.setState({
// 			isLoggedIn: true
// 		})
// 	}

// 	handleLogoutClick() {
// 		this.setState({
// 			isLoggedIn: false
// 		})
// 	}

// 	render() {
// 		const isLoggedIn = this.state.isLoggedIn;
// 		const button = isLoggedIn
// 			? <LogoutButton onClick={this.handleLogoutClick} />
// 			: <LoginButton onClick={this.handleLoginClick} />;

// 		return (
// 			<div>
// 				<Greeting isLoggedIn={isLoggedIn} />
// 				{button}
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(
// 	// <Greeting isLoggedIn={false}/>,
// 	<LoginControl />,
// 	document.getElementById('root')
// )

// function Mailbox(props) {
// 	const unreadMessages = props.unreadMessages;
// 	return (
// 		<div>
// 			<h1>Hello!</h1>
// 			{unreadMessages.length > 0 &&
// 				<h2>
// 					You have {unreadMessages.length} unread messages.
// 			</h2>
// 			}
// 		</div>
// 	)
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
// 	<Mailbox unreadMessages={messages} />,
// 	document.getElementById('root')
// )

// function WarningBanner(props) {
// 	if (!props.warn) {
// 		return null;
// 	}

// 	return (
// 		<div className="warning">
// 			Warning!
// 		</div>
// 	);
// }

// class Page extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { showWarning: true };
// 		this.handleToggleClick = this.handleToggleClick.bind(this);
// 	}

// 	handleToggleClick() {
// 		this.setState(state => ({
// 			showWarning: !state.showWarning
// 		}));
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<WarningBanner warn={this.state.showWarning} />
// 				<button onClick={this.handleToggleClick}>
// 					{this.state.showWarning ? 'Hide' : 'Show'}
// 				</button>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<Page />,
// 	document.getElementById('root')
// );

// 列表 & Key
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map(number =>
// 	<li>{number}</li>
// )

// ReactDOM.render(
// 	<ul>{listItems}</ul>,
// 	document.getElementById('root')
// );

// function NumberList(props) {
// 	const numbers = props.numbers;

// 	return (
// 		<ul>
// 			{numbers.map(number =>
// 				<li key={number.toString()}>
// 					{number}
// 				</li>
// 			)}
// 		</ul>
// 	)
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
// 	<NumberList numbers={numbers} />,
// 	document.getElementById('root')
// );

// 表单
// class NameForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			value: '',
// 		};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}

// 	handleSubmit(event) {
// 		alert(`提交的名字： ${this.state.value}`);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					名字：
// 					<input type="text" value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="提交" />
// 			</form>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<NameForm />,
// 	document.getElementById('root')
// );

// class EssayForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
// 		};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}

// 	handleSubmit(event) {
// 		alert('提交的文章: ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					文章:
// 					<textarea value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="提交" />
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<EssayForm />,
// 	document.getElementById('root')
// );

// class FlavorForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			value: 'coconut'
// 		};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}

// 	handleSubmit(event) {
// 		alert('你喜欢的风味是: ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					选择你喜欢的风味:
// 					<select value={this.state.value} onChange={this.handleChange}>
// 						<option value="apple">苹果</option>
// 						<option value="pear">梨子</option>
// 						<option value="coconut">椰子</option>
// 						<option value="orange">橙子</option>
// 					</select>
// 				</label>
// 				<input type="submit" value="提交" />
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<FlavorForm />,
// 	document.getElementById('root')
// );

// class Reservation extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isGoing: true,
// 			numberOfGuests: 2
// 		};

// 		this.handleInputChange = this.handleInputChange.bind(this);
// 	}

// 	handleInputChange(event) {
// 		const target = event.target;
// 		const value = target.type === 'checkbox' ? target.checked : target.value;
// 		const name = target.name;

// 		this.setState({
// 			[name]: value
// 		});
// 	}

// 	render() {
// 		return (
// 			<form>
// 				<label>
// 					参与:
// 					<input
// 						name="isGoing"
// 						type="checkbox"
// 						checked={this.state.isGoing}
// 						onChange={this.handleInputChange} />
// 				</label>
// 				<br />
// 				<label>
// 					来宾人数:
// 					<input
// 						name="numberOfGuests"
// 						type="number"
// 						value={this.state.numberOfGuests}
// 						onChange={this.handleInputChange} />
// 				</label>
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<Reservation />,
// 	document.getElementById('root')
// );

// 状态提升
// function BoilingVerdict(props) {
// 	if (props.celsius >= 100) {
// 		return <p>The water would boil.</p>;
// 	}
// 	return <p>The water would not boil.</p>;
// }

// const scaleNames = {
// 	c: 'Celsius',
// 	f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(e) {
// 		this.props.onTemperatureChange(e.target.value);
// 	}

// 	render() {
// 		const temperature = this.props.temperature;
// 		const scale = this.props.scale;

// 		return (
// 			<fieldset>
// 				<legend>Enter temperature in {scaleNames[scale]}:</legend>
// 				<input
// 					value={temperature}
// 					onChange={this.handleChange} />
// 			</fieldset>
// 		);
// 	}
// }

// class Calculator extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			temperature: '',
// 			scale: 'c',
// 		};
// 		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
// 		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
// 	}

// 	handleCelsiusChange(temperature) {
// 		this.setState({
// 			scale: 'c',
// 			temperature
// 		})
// 	}

// 	handleFahrenheitChange(temperature) {
// 		this.setState({
// 			scale: 'f',
// 			temperature
// 		})
// 	}

// 	render() {
// 		const scale = this.state.scale;
// 		const temperature = this.state.temperature;
// 		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
// 		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

// 		return (
// 			<div>
// 				<TemperatureInput
// 					scale="c"
// 					temperature={celsius}
// 					onTemperatureChange={this.handleCelsiusChange} />
// 				<TemperatureInput
// 					scale="f"
// 					temperature={fahrenheit}
// 					onTemperatureChange={this.handleFahrenheitChange} />
// 				<BoilingVerdict
// 					celsius={parseFloat(celsius)} />
// 			</div>
// 		);
// 	}
// }

// function toCelsius(fahrenheit) {
// 	return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
// 	return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
// 	const input = parseFloat(temperature);
// 	if (Number.isNaN(input)) {
// 		return '';
// 	}
// 	const output = convert(input);
// 	const rounded = Math.round(output * 1000) / 1000;
// 	return rounded.toString();
// }

// ReactDOM.render(
// 	<Calculator />,
// 	document.getElementById('root')
// );
