

import l from 'lodash';
import {fetch_posts,show_post,create_post,delete_post} from '../actions/index';

export  default  function PostReducer (state={},action) {

  switch  (action.type){

      case fetch_posts:

          return l.mapKeys(action.payload.data,'id');
  // array is converted into an object

      case delete_post:
        return l.omit(state,action.payload);


      case show_post:
          // const postdata=action.payload.data;//post created
          //  const newstate={ ...state};//empty the obj
          // //add the fetched posts into the state object mainly inside it
          //  newstate[action.payload.data.id]=postdata;//map it
          // return newstate;

   return { ...state,[action.payload.data.id]:action.payload.data};


      default :return state



  }







}
