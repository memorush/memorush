import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataService from "../../../service/fetchDataService";
import { BASE_URL } from "../../const/url-endpoints.const";

// -------------------------------------- AsyncThunk --------------------------------------

export const getAllCardSets = createAsyncThunk('card-set/getAllCardSets', async (arg, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;

  const payload = {
    method: 'GET',
    url: `${BASE_URL}/api/v1/card-set/all`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  };
  const response = await fetchDataService(payload);
  return response.data;
});

export const createNewCardSet = createAsyncThunk('card-set/create', async (arg, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;
  const payload = {
    method: 'POST',
    url: `${BASE_URL}/api/v1/card-set/add`,
    data: {
      ...arg,
      tags: argToArrayBySplitter(arg.tags, ","),
      flashCardArray: Object.values(arg.flashCardArray)
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  };
  const response = await fetchDataService(payload);
  return response.data;
});

export const updateCardSet = createAsyncThunk('card-set/update', async (arg, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;
  const { cardSetId, cardSetEntity } = arg;
  const payload = {
    method: 'PUT',
    url: `${BASE_URL}/api/v1/card-set/update/${cardSetId}`,
    //! Вынести в отдельный метод формирование data
    data: {
      ...cardSetEntity,
      tags: argToArrayBySplitter(cardSetEntity.tags, ","),
      flashCardArray: Object.values(cardSetEntity.flashCardArray)
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  }
  const response = await fetchDataService(payload);
  return response.data;
})

export const deleteCardSet = createAsyncThunk('card-set/delete', async (id, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;

  const payload = {
    method: 'DELETE',
    url: `${BASE_URL}/api/v1/card-set/delete/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  }
  const response = await fetchDataService(payload);
  return response.data;
})

export const setFavoriteCardSet = createAsyncThunk('card-set/setFavorite', async (id, { getState }) => {
  const state = getState();
  const token = state.auth.authEntity.token;
  const cardSet = state.cardSet.cardSetEntities.find(card => card.id === id);

  const payload = {
    method: 'PUT',
    url: `${BASE_URL}/api/v1/card-set/update/${id}`,
    data: {
      ...cardSet,
      isFavorite: !cardSet.isFavorite
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token
    }
  };
  const response = await fetchDataService(payload);
  return response.data;
});

// -------------------------------------- Slice --------------------------------------

const initialState = {
  cardSetEntities: [],
  status: null,
  error: null
}

const cardSetSlice = createSlice({
  name: 'card-set',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCardSets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllCardSets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cardSetEntities = action.payload;
      })
      .addCase(getAllCardSets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
      // Add new card-set set
      .addCase(createNewCardSet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNewCardSet.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(createNewCardSet.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
      // Add new card-set set
      .addCase(setFavoriteCardSet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setFavoriteCardSet.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const idx = state.cardSetEntities.findIndex(cardSet => cardSet.id === action.payload.id);
        state.cardSetEntities[idx] = action.payload;
      })
      .addCase(setFavoriteCardSet.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
});

export default cardSetSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const cardSetEntitiesSelector = state => state.cardSet.cardSetEntities;
export const cardSetByIdSelector = (state, id) => state.cardSet.cardSetEntities.find(card => id == card.id);
export const flashCardArrayFromCardSetWithIdSelector = (state, id) => cardSetByIdSelector(state, id).flashCardArray;


//------------------------------------ Utils ------------------------------------

//! Проблема этого метода в том, что аргумент может быть как массивом, так и строкой! Нужно переработать структуру данных
const argToArrayBySplitter = (string, splitter) => {
  if(Array.isArray(string)) {
    return string;
  }
  if(string != undefined && string != "") {
    return string.split(splitter);
  }
  return Array.of("");
}

//------------------------------------ Методы ниже не используются ------------------------------------
//TODO Переделать! Сделать мемоизированным и механизм фильтрации изменить!
export const cardEntityByFavoriteAndLearnedSelector = (state, favorite, learned) => {
  const favoriteCards = state.cardSet.cardSetEntities.filter(card => {
    return card.favorite === favorite
  });
  const learnedCards = state.cardSet.cardSetEntities.filter(card => {
    return card.learned === learned
  });
  if ((favorite === true) && (learned === false)) return favoriteCards;
  if ((favorite === false) && (learned === true)) return learnedCards;
  return state.cardSet.cardSetEntities;
}

//TODO Сделать более универсальным
export const getSortedCardByCardSetSelector = state => {
  const sorted = state.cardSet.cardSetEntities.reduce((result, card) => {
    result[card.cardSet.id] = {
      ...result[card.cardSet.id],
      [card.id]: card
    }
    return result;
  }, {});

  return sorted;
}


