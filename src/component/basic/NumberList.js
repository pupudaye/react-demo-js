import React from "react";

class NumberList extends React.Component {
    render() {
        let list = this.props.dataList.map((item,index) => {
            return <li key={index} > {item}</li>
        })
        return (
            <ul>{list}</ul>
        )
    }
}

export default NumberList