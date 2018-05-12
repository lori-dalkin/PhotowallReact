import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    return <div>
                <Link className="addIcon" to="/AddPhoto"></Link>
                <div className="photoGrid">
                    {props.posts
                        .sort(function(x,y){
                            return y.id - x.id
                        })
                        .map((post, index) => <Photo key={index} post={post} index={index} {...props}/>)}
                </div>
            </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

/* Changed to be a function as you can see above ^
class PhotoWall extends Component {
    render(){
        return <div className="photoGrid">
                {this.props.posts.map((post,index) => <Photo key={index} post={post}/>)}
             </div>
    }
*/

export default PhotoWall;