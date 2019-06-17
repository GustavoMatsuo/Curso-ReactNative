import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import PostReducer from './reducers/post'

const reducers = combineReducers({
    user: userReducer,
    posts: PostReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig