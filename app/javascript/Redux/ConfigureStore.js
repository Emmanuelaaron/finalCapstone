import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import sessionReducer from './Session/Session';
import carsReducer from './Cars/Cars';

const reducer = combineReducers({ session: sessionReducer, cars: carsReducer });
const middleWare = applyMiddleware(thunkMiddleware, logger);

const Store = createStore(reducer, middleWare);

export default Store;
