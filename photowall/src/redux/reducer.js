import posts from '../data/posts'

//the first time this run we can set a default state for posts
const postReducer = function posts(state = posts, action){
    console.log(action.index)
    switch(action.type){
        case 'REMOVE_POST':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        default: 
            return state
    }

}

export default postReducer;