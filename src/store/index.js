import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import filmsReducer from './films';


const middlewares = [];

const rootReducer = combineReducers({
  films: filmsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blackList: ['modal'],
};

// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(logger);
// };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(...middlewares),
});

const persistor = persistStore(store);

export { persistor }
export default store;
