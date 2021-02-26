import React from 'react';

// class App extends React.Component {
// 	render() {
// 		return <Toolbar theme="dark" />;
// 	}
// }

// function Toolbar(props) {
// 	// Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
// 	// 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
// 	// 因为必须将这个值层层传递所有组件。
// 	return (
// 		<div>
// 			<ThemeButton theme={props.theme} />
// 		</div>
// 	)
// }

// class ThemeButton extends React.Component {
// 	render() {
// 		return <button theme={this.props.theme}></button>
// 	}
// }

// export { App };

// const themes = {
// 	light: {
// 		foreground: '#000000',
// 		background: '#eeeeee',
// 	},
// 	dark: {
// 		foreground: '#ffffff',
// 		background: '#222222',
// 	},
// };

// const ThemeContext = React.createContext(
// 	themes.dark,
// );

// class ThemedButton extends React.Component {
// 	render() {
// 		let props = this.props;
// 		let theme = this.context;
// 		return (
// 			<button
// 				{...props}
// 				style={{ backgroundColor: theme.background }}
// 			></button>
// 		)
// 	}
// }
// ThemedButton.contextType = ThemeContext;

// function Toolbar(props) {
// 	return (
// 		<ThemedButton onClick={props.changeTheme}>
// 			Change Theme
// 		</ThemedButton>
// 	)
// }

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			theme: themes.light
// 		};

// 		this.toggleTheme = () => {
// 			this.setState(state => ({
// 				theme: state.theme === themes.light ? themes.dark : themes.light,
// 			}))
// 		}
// 	}

// 	render() {
// 		// 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
// 		// 而外部的组件使用默认的 theme 值
// 		return (
// 			<div>
// 				<ThemeContext.Provider value={this.state.theme}>
// 					<Toolbar changeTheme={this.toggleTheme} />
// 				</ThemeContext.Provider>
// 				<div>
// 					<ThemedButton >outside</ThemedButton>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export { App };

// 在嵌套组件中更新 Context
const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee',
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222',
	},
};

const ThemeContext = React.createContext({
	theme: themes.dark,
	toggleTheme: () => { },
});

function ThemeToggleButton() {
	// Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
	return (
		<ThemeContext.Consumer>
			{({ theme, toggleTheme }) => (
				<button onClick={toggleTheme}
					style={{ backgroundColor: theme.background }}>
					Toggle Theme
				</button>
			)}
		</ThemeContext.Consumer>
	);
}

class App extends React.Component {
	constructor(props) {
		super(props);

		this.toggleTheme = () => {
			this.setState(state => ({
				theme: state.theme === themes.light ? themes.dark : themes.light,
			}))
		};

		// State 也包含了更新函数，因此它会被传递进 context provider。
		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme,
		};
	}

	render() {
		// 整个 state 都被传递进 provider
		return (
			<div>
				<ThemeContext.Provider value={this.state}>
					<Content />
				</ThemeContext.Provider>
			</div>
		);
	}
}

function Content() {
	return (
		<div>
			<ThemeToggleButton />
		</div>
	)
}

export { App };