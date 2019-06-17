import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Rafael Pereira',
            email: 'rafael@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [
                {
                    nickname: 'Thatiana Matsuo',
                    comment: 'Excelente foto!'
                },
                {
                    nickname: 'Rafael Pereira',
                    comment: 'Muito boa!'
                }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Thatiana Matsuo',
            email: 'thati@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: []
        }
    ]
}

const reduce = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
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