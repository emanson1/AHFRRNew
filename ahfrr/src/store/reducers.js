import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import ahfrrReducer from '../reducers/ahfrrReducer';

export default (history) => combineReducers ({
    router: connectRouter(history),
    ahfrr: ahfrrReducer
});