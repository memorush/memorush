import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
// As a basic setup, import your same slice reducers
import authReducer from '../redux/features/auth/auth-slice';
import cardSetReducer from '../redux/features/card-set/card-set.slice';
import popupReducer from '../redux/features/popup/popup-slice';
import searchReducer from '../redux/features/search/search.slice';

export function renderWithProvidersAndMemoryRouter(
  component,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        auth: authReducer,
        cardSet: cardSetReducer,
        popup: popupReducer,
        search: searchReducer
      },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter>
          {children}
        </MemoryRouter>
      </Provider>
    )
  }

  return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) }
}