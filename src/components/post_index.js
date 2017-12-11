import React,{Component} from 'react';

import { connect } from 'react-redux';//react to redux

import { bindActionCreators } from 'redux'

import {fetchposts}  from '../actions/index';

import { Link } from 'react-router-dom';


import l from 'lodash';
// make it as container
 class Postindex extends  Component {

//lifecycle method and it is called afeter dom insertion
     componentDidMount (){

         this.props.fetchposts();

     }

     renderpost(){
// map over the value of each key and indexes
    return l.map(this.props.posts,function (post) {

          return (
             <li className='list-group-item' key={post.id}>
                 <Link className="  margin-left"  to= {`/posts/${post.id}`} >{post.title} </Link>

             </li>


          );


     })


     }


    render(){


        return <div>
            <div className='text-xs-right'>
                <Link to='/posts/new' className="btn btn-danger">
                   add a post
                </Link>
            </div>

            <h3>Posts</h3>

            <ul className='list-group' >
                {this.renderpost()}


            </ul>


        </div>
    }

}

function  mapstatetoprops(state) {
     return {
         posts:state.posts
     }

}


function  mapstatetodispatch(Dispatch) {

    // return bindActionCreators({ fetchWeather }, dispatch);

    return bindActionCreators({ fetchposts },Dispatch)
}

// connect (null ,{ fetchposts :fecthpost }
export  default  connect(mapstatetoprops,mapstatetodispatch)(Postindex);