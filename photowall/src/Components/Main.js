import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom'

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
            <Route exact path = "/" render={() => (
                <div>
                    <Title title = {"Photowall"}/>
                    <PhotoWall {...this.props} /> 
                </div>
            )} />
            {/* <Route path ="/AddPhoto" render={({history}) => (
                <div>
                    <Title  title={"Photowall"}/>
                    <AddPhoto onAddPhoto={(addedPost) => {
                        console.log(addedPost)
                        this.addPhoto(addedPost)
                        history.push('/')
                    }}/>
                </div>
            )} /> */}
        </div>
        )
             
    }
}

export default Main;
