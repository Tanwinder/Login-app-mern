import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/root-reducer';

const middleWare = [];
middleWare.push(thunk);

const loggerMiddleware = createLogger({
	predicate: () => process.env.NODE_ENV !== 'production',
});
middleWare.push(loggerMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
export default createStoreWithMiddleware(rootReducer);