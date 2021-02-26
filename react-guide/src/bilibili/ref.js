import React from 'react';

// /** 字符串形式的ref 不推荐 存在效率问题 */
// class Demo extends React.Component {

// 	showDataLeft() {
// 		const { inputLeft } = this.refs;
// 		alert(inputLeft.value);
// 	}

// 	showDataRight() {
// 		const { inputRight } = this.refs;
// 		alert(inputRight.value);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<input ref="inputLeft" type="text" placeholder="点击按钮数据提示" />&nbsp;
// 				<button ref="btn" onClick={() => this.showDataLeft()}>点击显示左侧数据提示</button>&nbsp;
// 				<input ref="inputRight" onBlur={() => this.showDataRight()} type="text" placeholder="失去焦点提示" />
// 			</div>
// 		)
// 	}
// }

// export { Demo };

// /** 回调形式的ref */
// class Demo extends React.Component {

// 	showDataLeft() {
// 		console.log(this);
// 		alert(this.inputLeft.value);
// 	}

// 	showDataRight() {
// 		alert(this.inputRight.value);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<input ref={current => this.inputLeft = current} type="text" placeholder="点击按钮数据提示" />&nbsp;
// 				<button ref="btn" onClick={() => this.showDataLeft()}>点击显示左侧数据提示</button>&nbsp;
// 				<input ref={current => this.inputRight = current} onBlur={() => this.showDataRight()} type="text" placeholder="失去焦点提示" />
// 			</div>
// 		)
// 	}
// }

// export { Demo };


// /**
//  * 回调次数问题
//  * 如果 ref 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次。
//  * 第一次传入参数 null，然后第二次会传入参数 DOM 元素。
//  */
// class Demo extends React.Component {

// 	state = { isHot: true };

// 	showDataLeft() {
// 		alert(this.inputLeft.value);
// 	}

// 	changeWhether = () => {
// 		const { isHot } = this.state;
// 		this.setState({
// 			isHot: !isHot,
// 		})
// 	}

// 	saveInput = (current) => {
// 		this.inputLeft = current;
// 		console.log('@', current);
// 	}

// 	render() {
// 		const { isHot } = this.state;
// 		return (
// 			<div>
// 				<h2 >今天天气很{isHot ? '炎热' : '凉爽'}</h2>
// 				{/* <input ref={current => { this.inputLeft = current; console.log('@', current); }} type="text" placeholder="点击按钮数据提示" />&nbsp; */}
// 				<input ref={this.saveInput} type="text" placeholder="点击按钮数据提示" />&nbsp;

// 				<button ref="btn" onClick={() => this.showDataLeft()}>点击显示左侧数据提示</button>&nbsp;
// 				<button onClick={this.changeWhether}>改变天气</button>
// 			</div>
// 		)
// 	}
// }

// export { Demo };

/** createRef */
class Demo extends React.Component {
	/**
	 * React.createRef调用后可返回一个容器，该容器可以存储被ref所表示的节点
	 * 该容器是专人专用的，后存入的覆盖之前的
	 */
	myRef = React.createRef();
	myRef2 = React.createRef();


	showDataLeft() {
		alert(this.myRef.current.value);
	}

	showDataRight() {
		alert(this.myRef2.current.value);
	}

	render() {
		return (
			<div>
				<input ref={this.myRef} type="text" placeholder="点击按钮数据提示" />&nbsp;
				<button ref="btn" onClick={() => this.showDataLeft()}>点击显示左侧数据提示</button>&nbsp;
				<input ref={this.myRef2} onBlur={() => this.showDataRight()} type="text" placeholder="失去焦点提示" />
			</div>
		)
	}
}

export { Demo };
