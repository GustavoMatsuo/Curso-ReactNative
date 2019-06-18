import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import PostReducer from './reducers/post'

const reducers = combineReducers({
    user: userReducer,
    posts: PostReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig