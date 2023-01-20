import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchDataService from "../../../service/fetchDataService";
import { BASE_URL } from "../../const/url-endpoints.const";

// -------------------------------------- AsyncThunk --------------------------------------

export const findCardSetsBySearchString = createAsyncThunk(
  'search/findCardSetsBySearchString',
  async (arg, { getState }
  ) => {
    const state = getState();
    const token = state.auth.authEntity.token;
    console.log(arg);
    const payload = {
      method: 'GET',
      url: `${BASE_URL}/api/v1/card-set/search?search=${arg}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      }
    };
    const response = await fetchDataService(payload);
    return response.data;
  });

const initialState = {
  foundCardSetEntities: [],
  status: null,
  error: null
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(findCardSetsBySearchString.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(findCardSetsBySearchString.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.foundCardSetEntities = action.payload;
      })
      .addCase(findCardSetsBySearchString.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
});

export default searchSlice.reducer;

// -------------------------------------- Selectors --------------------------------------


export const foundCardSetEntitiesSelector = state => state.search.foundCardSetEntities;
export const foundCardSetEntityByIdSelector = (state, id) => (
  state.search.foundCardSetEntities.filter(cardSet => cardSet.id == id)[0]
);
