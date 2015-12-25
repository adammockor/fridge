import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import fridgeItems from './fridgeItems.js';

export default combineReducers({
  fridgeItems,
  router: routeReducer
});
