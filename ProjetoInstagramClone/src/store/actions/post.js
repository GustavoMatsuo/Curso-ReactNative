import { ADD_POST, ADD_COMMENT } from './actionTypes'
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
    //return {
    //    type: ADD_POST,
    //    payload: post
    //}
}

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}