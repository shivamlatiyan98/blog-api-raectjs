import React,{Component} from 'react';

import { Field, reduxForm } from  'redux-form';

import { connect } from 'react-redux';

import  {bindActionCreators} from  'redux';

import { Link } from 'react-router-dom';
import {createpost} from "../actions";

 class Postnew extends  Component {

constructor(props){
    super(props)
    this.onsubmitf=this.onsubmitf.bind(this);
}

// field also has a touched method to check if a input is used or not
// field== event to connent to the input tag mainly
   renderfield (field){
// to input we need the props and to give props we need to have field

       const { meta:{touched,error }  } =field

       const className = `form-group ${touched && error? "has-danger" : ""}`;
      // const { meta }=field


       // const





       return (
           <div className={className}>
               <label>{field.label}</label>
               <input className="form-control" type="text" {...field.input} />
               <div className="text-help">
                   {touched ? error : ""}
               </div>
           </div>
       );





// ..filed it is uesd to get all event handlers

   }

   onsubmitf(values){



       console.log(values);
   createpost(values,( ()=> {this.props.history.push('/') }));


   // navigate afer and ajax

   }


    render () {
       const {handleSubmit }=this.props
return (
  <div>
   <form onSubmit={handleSubmit(this.onsubmitf)}>
       <Field name='title' component={this.renderfield}   label='title for post'    />

       <Field name='categories' component={this.renderfield}   label='categories for post '   />


       <Field name='content' component={this.renderfield}   label='content for post '   />






       <button type="submit" className="btn btn-primary">Submit</button>
       <Link className="btn btn-danger" to='/'>cancel</Link>


   </form>

  </div>
)
    }


}




  function validate(values) {

     const errors={};


     if(!values.title){

        errors.title=' enter the title'
     }


    // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }



    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;



}


function mapdispatchtoprops(dispatch) {

     return bindActionCreators({ createpost },dispatch);

}



// it is equivalent  to connect method and it takes conf obj as aruguments
// posts name of form
// form is namespace
export default reduxForm({
    validate:validate,
    form:'postsnewform'


}) (

    connect(null,mapdispatchtoprops)(Postnew)
// return a container which is argument for the reduxform valid argument mainly


);








// component is a fn tha t returns a jsx to field








