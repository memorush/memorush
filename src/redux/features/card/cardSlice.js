import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataService from "../../../service/fetchDataService";

// -------------------------------------- AsyncThunk --------------------------------------

export const getCards = createAsyncThunk('card/get', async (data) => {
  const response = await fetchDataService('GET', '/api/v1/card/all', data);
  return response.data;
})

// -------------------------------------- Slice --------------------------------------

const initialState = {
  cardEntity: [],
  status: null,
  error: null
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCards.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.cardEntity = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default cardSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const cardEntitySelector = state => state.card.cardEntity;
export const cardByIdSelector = (state, id) => state.card.cardEntity.find(card => id === card.id);
//TODO Переделать! Сделать мемоизированным и механизм фильтрации изменить!
export const cardEntityByFavoriteAndLearnedSelector = (state, favorite, learned) => {
  const favoriteCards = state.card.cardEntity.filter(card => {
    return card.favorite === favorite
  });
  const learnedCards = state.card.cardEntity.filter(card => {
    return card.learned === learned
  });
  if ((favorite === true) && (learned === false)) return favoriteCards;
  if ((favorite === false) && (learned === true)) return learnedCards;
  return state.card.cardEntity;
}

//TODO Сделать более универсальным
export const getSortedCardByCardSetSelector = state => {
  const sorted = state.card.cardEntity.reduce((result, card) => {
    result[card.cardSet.id] = {
      ...result[card.cardSet.id],
      [card.id]: card
    }
    return result;
  }, {});

  return sorted;
}
