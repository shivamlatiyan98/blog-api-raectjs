import axios from 'axios';
export const fetch_posts='fetch_posts';


const Root_url='http://reduxblog.herokuapp.com/api'


const api_key= '?key=paperclip1234';

export const create_post='create_post'

// redux-promise resolves this middlewarwe
export  function fetchposts() {

    const request=axios.get(`${Root_url}/posts${api_key}`)


//payload is a promise //payload contains the data
    return{
        type:fetch_posts,
        payload:request

    }


}

export  function createpost(values,callback) {


    const request=axios.post(`${Root_url}/posts${api_key}`,values).then(( )=>{
        callback();
    })
// promise resolves theen call the callback



//payload is a promise //payload contains the data
    return{
        type:create_post,
        payload:request

    }




}

export  const show_post='show_post';


export  const delete_post='delete_post'
export function fetchpostp(id) {

    const request=axios.get(`${Root_url}/posts/${id}${api_key}`);

  return{
        type:show_post,
        payload:request

    }


}

export function deletepost(id,callback) {
    const request=axios.delete(`${Root_url}/posts/${id}${api_key}`).then(
        ()=>{callback() }
    );


    return{
        type:delete_post,
        payload:id

    }


}






















