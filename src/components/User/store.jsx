import {  applyMiddleware } from 'redux';
import { legacy_createStore as  createStore} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;