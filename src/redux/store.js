import { configureStore } from '@reduxjs/toolkit';
import PopupMiddleware from './middleware/popup.middleware';
import { loadState, saveState } from '../service/localStorageService';
import authReducer from './features/auth/auth-slice';
import cardSetReducer from './features/card-set/card-set.slice';
import popupReducer from './features/popup/popup-slice';
import searchReducer from './features/search/search.slice';

const persistedState = loadState('auth');

const store = configureStore({
  reducer: {
    auth: authReducer,
    cardSet: cardSetReducer,
    popup: popupReducer,
    search: searchReducer
  },
  preloadedState: {
    auth: persistedState
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PopupMiddleware)
})


//TODO Доработать, чтобы можно было передавать объект с множеством полей!
//! Save auth state
store.subscribe(() => {
  saveState('auth', store.getState().auth);
});

export default store;
