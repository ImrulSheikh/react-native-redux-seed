
import { combineReducers } from 'redux';

import navigationState from './navReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const appReducer = combineReducers({
  ajaxCallsInProgress,
  navigationState
});

export default appReducer;