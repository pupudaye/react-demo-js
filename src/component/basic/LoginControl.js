import React from "react";
import Login from './Login';
import Logout from './Logout';

class LoginControl extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoginOn: false
        }

        // 普通函数为了在回调中使用 `this`，这个绑定是必不可少的
        // this.changeToggleOn = this.changeToggleOn.bind(this)
    }

    // 这种写法需要绑定this
    // changeToggleOn() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
    // 推荐使用这种class fields方式来绑定回调this传递
    changeToggleOn = () => {
        this.setState(prevState => ({
            isLoginOn: !prevState.isLoginOn
        }));
    }

    render() {
        let button
        if (this.state.isLoginOn) {
            button = <Logout />
        } else {
            button = <Login />
        }

        return (
            <div>
                {button}
                <button type="button" onClick={this.changeToggleOn}>{this.state.isLoginOn ? 'OFF': 'ON' }</button>
            </div>
        )
    }
}
export default LoginControl