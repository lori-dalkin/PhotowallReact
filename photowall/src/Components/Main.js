import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom'


class Main extends Component {

    //Called once, before the instance is even mounted or inserted in the dom
    //Only used to inialize state and bind method to the proper context
    constructor(){
        super();
       ;
    }

    render(){
        console.log(this.props)
        return(
        <div> 
            <h1>
                <Link to="/">Photowall</Link>
            </h1>
            <Route exact path = "/" render={() => (
                <div>
                    <PhotoWall {...this.props} /> 
                </div>
            )} />
            <Route path ="/AddPhoto" render={({history}) => (
                <div>
                    <AddPhoto {...this.props}/>
                </div>
            )} />
        </div>
        )
             
    }
}

export default Main;
