import { SET_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: []
}

const reduce = (state = initialState, action) => {
    switch(action.type){
        case SET_POST:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId){
                        if(post.comments){
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        }
                        else{
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reduce