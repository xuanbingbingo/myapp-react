import React, {Component} from 'react';


//方式一：使用这种组件时，直接使用名称Hello即可，无需像<Hello />一样使用
// const element = (
//     <div>
//         <h1>hello, world</h1>
//         <h2>{new Date().toLocaleDateString}</h2>
//     </div>
// )

// export default element;


//方式二：要像<Hello />一样使用
// function Clock(props){
//     return (
//         <div>
//             <h1>hello, world</h1>
//             <h2>hehe {props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }

// export default Clock;


//方式三（es6常规用法）：要像<Hello />一样使用
// class Clock extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             date: new Date(),
//             isToggleOn: true
//         };
//         this.handleClick = this.handleClick.bind(this);//若使用尖头函数，则不需要绑定this,因为尖头函数一直指向当前的实例（其实就等于是在构造函数里定义的方法）
//     }
//     handleClick = () => {//class里定义的箭头函数，其实是等于在构造函数里定义的方法，而不是在原型上定义的方法，所以箭头函数内部的this将一直指向实例
//         console.log(this);
//         this.setState(preState=>({
//                 isToggleOn:!preState.isToggleOn
//             })
//         )
//         this.hehe();
//     }
//     hehe(){
//         console.log(this);
//     }
//     renderTest(){//测试将数据遍历成dom元素
//         const numbers = [1, 2, 3, 4, 5];
//         const listItems = numbers.map((number) =>
//           <li className='list' key={number}>{number}</li>
//         );
//         return listItems;
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//                 <button onClick={this.handleClick}>{this.state.isToggleOn ? 'On':'Off'}</button>
//                 {this.renderTest()}
//             </div>
//         )
//     }
//     componentDidMount() {
//         console.log('挂载成功。。。')
//         // this.timerID = setInterval(
//         //     () => {
//         //         this.state.date = new Date();
//         //         console.log(this.state.date.toLocaleTimeString());// this will not re-render a component ，典型的状态改变但dom没变的情况，不能这么写，，需注意使用下面的写法（setState）
//         //     },1000);

//         this.timerID = setInterval(
//             () => {
//                 this.setState({//改变状态的正确写法
//                     date: new Date()
//             });
//         },1000);

//         // Correct 异步处理时需用下面的setState
//         // this.setState((prevState, props) => ({
//         //     counter: prevState.counter + props.increment
//         // }));
//     }
//     componentWillUnmount() {
//         console.log('将要离开。。。');
//         clearInterval(this.timerID);
//     }
// }

// export default Clock;


//another Demo for ’方式三‘ ，controlled component,one Demo for form

class NameForm extends Component{
    constructor(props){
        super(props);
        this.state={
            value: 'grapefruit'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event){
        alert('a name has been commited' + this.state.value)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
          </form>
        )
    }
}

export default NameForm;
