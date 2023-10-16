import { configureStore } from '@reduxjs/toolkit';
import PopupMiddleware from './middleware/popup.middleware';
import { loadState, saveState } from '../service/localStorageService';
import authReducer from './features/auth/auth-slice';
import cardSetReducer from './features/card-set/card-set.slice';
import popupReducer from './features/popup/popup-slice';
import searchReducer from './features/search/search.slice';
import { dictionaryApi } from './features/dictionary/dictionary.rtk';

const persistedState = loadState('auth');

const store = configureStore({
  reducer: {
    auth: authReducer,
    cardSet: cardSetReducer,
    popup: popupReducer,
    search: searchReducer,
    dictionaryApi: dictionaryApi.reducer
  },
  preloadedState: {
    auth: persistedState
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dictionaryApi.middleware, PopupMiddleware)
})


//TODO Доработать, чтобы можно было передавать объект с множеством полей!
//! Save auth state
store.subscribe(() => {
  saveState('auth', store.getState().auth);
});

export default store;
