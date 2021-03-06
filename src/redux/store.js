import { 
  createStore, 
  combineReducers, 
  applyMiddleware, 
  compose 
} from 'redux';
import thunk from 'redux-thunk';
import phonesReducer from './phones/phonesReducer';
const rootReducer = combineReducers({
  phones: phonesReducer,
});
// Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}