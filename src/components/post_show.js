import React,{Component} from 'react';

import { Field, reduxForm } from  'redux-form';

import { connect } from 'react-redux';
import {fetchpostp ,deletepost} from "../actions";



import {Link } from 'react-router-dom';
 class Postshow extends  Component {

    componentDidMount(){

        const { id } =this.props.match.params;

        this.props.fetchpostp(id);

    }

   ondelete (){
    const {id}=this.props.match.params
   this.props.deletepost(id,()=>{
       this.props.history.push('/');

   })

   }


    render (){
        const { post }=this.props;
        if(!post){
            return<div>loading</div>
        }
        console.log(post)
        return(

        <div>
            <button className= " btn btn-success pull-xs-right" onClick={this.ondelete.bind(this)}>DElete post</button>


            <Link to='/' className="btn btn-danger">back to main page</Link>
            <h3> {post.title} </h3>
            <h6>categories:{post.categories} done</h6>
            <p>
                {post.content}
            </p>


        </div>
        );

    }

}

//state: appplication state and the another arugmunet it takes is the ownprops as ===thsis.pros

//to make availabe the required post mainly
function mapstatetoprops(state,ownprops) {
// ownprops===thsi.props
    return{
                   //id
        post:state.posts[ownprops.match.params.id]

    };



}



// shortcut for action to binded
export default connect(mapstatetoprops,{ fetchpostp,deletepost })(Postshow);







