import { configureStore } from '@reduxjs/toolkit';
import PopupMiddleware from './middleware/popup.middleware';
import authReducer from './features/auth/auth-slice';
import cardReducer from './features/card/cardSlice';
import popupReducer from './features/popup/popup-slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
    popup: popupReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PopupMiddleware)
})

export default store;