import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import WishReducer from './reducer/wishReducer';
import customerReducer from './reducer/customerReducer';
import artistReducer from './reducer/artistReducer';
import notificationReducer from './reducer/notificationReducer';


const rootReducer = combineReducers({
    WishReducer,
    customerReducer,
    artistReducer,
    notificationReducer
})

const middleware = [thunk];

const Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;