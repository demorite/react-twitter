import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/firebase';

const reducer = combineReducers({
	appReducer
});

const middlewares = applyMiddleware(...[
	thunk
]);

const store = createStore(reducer, middlewares);

export default store;