import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import {reducer as formReducer} from 'redux-form';

import fridge from './fridge.js';

export default combineReducers({
  fridge,
  router: routeReducer,
  form: formReducer,
});
