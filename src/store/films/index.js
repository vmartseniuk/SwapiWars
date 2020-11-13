/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import swapiModule from 'utils/swapi'


export const fetchFilms = createAsyncThunk('films/fetchFilms', async (params, { getState }) => {
  const { loading } = getState().films;

  if (!loading) {
    return;
  }

  const { data } = await swapiModule.getFilm();
  const { results } = data;

  return results;

});

const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchFilms.pending]: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    [fetchFilms.fulfilled]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.data.splice(0, state.data.length);
        state.data.push(...action.payload);
      }
    },
    [fetchFilms.rejected]: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.error = action.error;
      }
    },
  },
});

const { reducer } = filmsSlice;

export default reducer;


