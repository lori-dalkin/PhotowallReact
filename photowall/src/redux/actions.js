//remove
export function removePost(index){
    return{
        type:'REMOVE_POST',
        index
    }
}

//add
export function addPost(post){
    return{
        type:'ADD_POST',
        post
    }
}