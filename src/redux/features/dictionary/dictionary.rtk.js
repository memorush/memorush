import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../../const/url-endpoints.const";

// Define a service using a base URL and expected endpoints
export const dictionaryApi = createApi({
  reducerPath: 'dictionaryApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/v1/dictionary/` }),
  endpoints: (builder) => ({
    getAllDictionariesNames: builder.query({
      query: () => "/names"
    }),
    getDictionaryByName: builder.query({
      query: (arg) => {
        const { name } = arg;
        return {
          url: "by-name",
          params: { name: name }
        }
      }
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDictionariesNamesQuery, useGetDictionaryByNameQuery } = dictionaryApi;

export const selectAllRictionaryItemsByParams = (state, params) => {
  dictionaryApi.endpoints.getDictionaryByName.select(params => console.log(state))
}