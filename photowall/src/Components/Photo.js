import React, {Component} from 'react';
import PropTypes from 'prop-types'

/*Function syntax If you are only uing the clas to be a render, use a function instead.
function Photo(props){
    const post = props.post;

    return <figure className="figure">
    <img className="photo" src={post.imageLink} alt={post.description}/>
    <figcaption><p>{post.description}</p></figcaption>
    <div className="button-container">
        <button className="remove-button">Remove</button>
    </div>
</figure>;
}
*/

//Class syntax
class Photo extends Component{
    render(){
        const post = this.props.post;
        return <figure className="figure">
                <img className="photo" src={post.imageLink} alt={post.description}/>
                <figcaption><p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button onClick = {() => {
                        this.props.onRemovePhoto(post)
                    }}>Remove</button>
                </div>
            </figure>;
    }
}

//Good for debugging, ensures that you keep track of what your props are and what is needed exactly
Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;