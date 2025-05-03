import { combineReducers } from 'redux';
import darkThemeReducer from '../services/themechange/reducer/index.js';
const rootReducer = combineReducers({
  darkThemeReducer,
});
export default rootReducer;
