import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: props.increment,
            date: new Date()
        }
    }
    /**
     * 生命周期方法-挂载 第一次渲染组件时
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }
    /**
    * 生命周期方法-卸载 当组件被删除时
    */
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        // 直接依赖状态值做计算 可能会面临更新失效的情况，具体原因是因为状态更新是异步的
        // this.setState({
        //     counter: this.state.counter + this.props.increment,
        //     date: new Date()
        // })
        //推荐使用箭头函数
        this.setState((state, props) => ({
            counter: state.counter + props.increment,
            date: new Date()
        }))
        
        // 普通函数写法要反锁一些
        // this.setState(function (state, props) {
        //     return {
        //         counter: state.counter + props.increment,
        //         date: new Date()
        //     }
        // })
    }
    render() {
        return (
            <div>
                <h2>counter: {this.state.counter}</h2>
                <h2>Time: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
export default Clock;