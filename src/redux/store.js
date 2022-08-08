import { configureStore } from '@reduxjs/toolkit';
import PopupMiddleware from './middleware/popup.middleware';
import { loadState, saveState } from '../service/localStorageService';
import authReducer from './features/auth/auth-slice';
import cardReducer from './features/card/cardSlice';
import popupReducer from './features/popup/popup-slice';

const persistedState = loadState('auth');

const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
    popup: popupReducer
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