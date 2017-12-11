
import Postreducer from  './reducerpost_index';
import { combineReducers } from 'redux';

import { reducer as formreducer } from  'redux-form'


const rootReducer = combineReducers({
  // asing a function to a particular reducer
    // key for form should alwyas a form itself
    posts:Postreducer,
    form:formreducer


});


// form reducer asssisn a reducer as a function mainly
export default rootReducer;
