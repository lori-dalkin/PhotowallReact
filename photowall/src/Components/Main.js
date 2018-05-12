import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom'

// <List tasks = {['Something else','Another thing']}/>  pass in a props called tasks
class Main extends Component {

    //Called once, before the instance is even mounted or inserted in the dom
    //Only used to inialize state and bind method to the proper context
    constructor(){
        super();
        this.state = {
            posts: [],
            screen: 'photos'
        }
        this.removePhoto = this.removePhoto.bind(this); //This ensures that this is always bound to the correct context
        this.addPhoto = this.addPhoto.bind(this);
    }

    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    //We will pass this function as a prop :O
    removePhoto(postRemoved){
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }
    
    //Invoked immediately after the component is inserted into the DOM
    //Note: Ever fetching data from a DB, do it in here!
    componentDidMount(){
        const data = SimulateFetchFromDB();
        this.setState({
            posts: data
        })
    }

    //Invoked immediately before mounting occurs. Called before render.
    //DO NOT put any side effect code inside of componentWillMount,
    // and do not make API calls in this method
    componentWillMount(){}

    componentDidUpdate(prevProps, prevState){}

    render(){
        console.log(this.state.posts)
        return(
        <div> 
            <Route exact path = "/" render={() => (
                <div>
                    <Title title = {"Photowall"}/>
                    <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
                </div>
            )} />
            <Route path ="/AddPhoto" render={({history}) => (
                <div>
                    <Title  title={"Photowall"}/>
                    <AddPhoto onAddPhoto={(addedPost) => {
                        console.log(addedPost)
                        this.addPhoto(addedPost)
                        history.push('/')
                    }}/>
                </div>
            )} />
        </div>
        )
             
    }
}

function SimulateFetchFromDB(){
    return [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
        }, {
        id: 2,
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
}

export default Main;
