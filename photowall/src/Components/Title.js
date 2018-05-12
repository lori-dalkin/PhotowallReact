import React from 'react';

//Function syntax If you are only uing the clas to be a render, use a function instead.
function Title(props){
    return <h1> {props.title} </h1>;
}

/*
class Title extends Component {
    render(){
        return <h1> Photowall </h1>
    }
}
*/

export default Title;