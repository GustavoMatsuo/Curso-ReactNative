import { SET_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        //https://us-central1-projeto-reactnative.cloudfunctions.net/uploadImage
        axios({ 
            url: 'uploadImage',
            baseURL: 'https://us-central1-projeto-reactnative.cloudfunctions.net/',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
            .catch(err => console.log(err))
            .then(res => {
                post.image = res.data.imageUrl 
                axios.post('/post.json', {...post })
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
            })
    }
}

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export const setPosts = posts => {
    return {
        type: SET_POST,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/post.json')
            .catch(err => console.log(err))
            .then(res => {
                const rawPosts = res.data
                const posts = []
                for(let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                }
                dispatch(setPosts(posts))
            })
    }
}