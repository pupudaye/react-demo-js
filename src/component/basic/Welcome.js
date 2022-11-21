import React from 'react';

class Welcome extends React.Component {

    user = {
        firstName: 'Harper',
        lastName: 'Perez',
        age: 1 + 9,
        homepage: '#'
    }


    formatName() {
        return this.user.firstName + ' ' + this.user.lastName + '!';
    }

    render() {
        return (
            <h1>Hello ,{this.formatName()} {this.user.age > 11 && '年龄: ' + this.user.age}</h1>
        )
    }
}

// function Welcome(props){
//     return <h1>Hello ,{props.name}</h1>
//   }
export default Welcome;