import { ADD_POST } from '../actions/actionTypes'

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
        default:
            return state
    }
}

export default reduce