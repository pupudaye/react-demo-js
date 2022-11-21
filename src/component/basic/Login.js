import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            desc: '',
            like: ['lime', 'grapefruit']
        }
    }
    changeValue = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const fieldName = target.name;
        this.setState({
            [fieldName]: value
        })
    }

    submit = (event) => {
        alert('提交数据: ' + JSON.stringify(this.state));
        console.log('Submit success')
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                  <input type="text" name="name2" value="asdf" onChange={this.changeValue} />
                <label>
                    名字:
                    <input type="text" name="name" value={this.state.name} onChange={this.changeValue} />
                </label>
                <br />
                <label>
                    描述:
                    <textarea name="desc" value={this.state.desc} onChange={this.changeValue} >
                    </textarea>
                </label>
                <br />
                <label>
                    喜欢:
                    <select multiple={true} name="like" value={this.state.like} onChange={this.changeValue}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <br />
                <label>
                    头像:
                    <input type="file" />
                </label>
                <br />
                <button type="submit"> Submit</button>
            </form>
        )
    }
}

export default Login