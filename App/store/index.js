import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['snackbar'], // Persist everything except snackbar reducer
};

export default () => {
  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // Create store with persisted reducer and Reactotron enhancer
  const store = createStore(persistedReducer);

  // Set up the persistor
  const persistor = persistStore(store);

  return { store, persistor };
};
