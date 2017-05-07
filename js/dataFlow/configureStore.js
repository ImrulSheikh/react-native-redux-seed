
import {persistStore, autoRehydrate} from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';
import promise from './promise';

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
  );

  const store = createStore(reducer, enhancer, autoRehydrate());
  persistStore(store, { storage: AsyncStorage });

  return store;
}
