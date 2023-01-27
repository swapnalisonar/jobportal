
import{combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware} from 'redux'
import{createStore,} from "redux";


import thunk from 'redux-thunk'
import {jobsReducer} from './reducers/JobsReducer'
import {loaderReducer} from './reducers/loaderReducer'
import { usersReducer } from './reducers/usersReducer';



const rootReducer=combineReducers({
  jobsReducer :  jobsReducer,
  loaderReducer : loaderReducer,
  usersReducer:usersReducer,
  

});
  
const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );

  
  export default store;

