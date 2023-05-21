// store/songsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await api.get('/songs');
  return response.data;
});

export const addSong = createAsyncThunk('songs/addSong', async (song) => {
  const response = await api.post('/songs', song);
  return response.data;
});

export const updateSong = createAsyncThunk('songs/updateSong', async (song) => {
   // const response = await api.put(/songs/${song.id}, song);

});

export const deleteSong = createAsyncThunk('songs/deleteSong', async (id) => {
  //await api.delete(/songs/${id});
  return id;
});

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addSong.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateSong.fulfilled, (state, action) => {
        const index = state.findIndex((song) => song.id === action.payload.id);
        state[index] = action.payload;
      })
      .addCase(deleteSong.fulfilled, (state, action) => {
        return state.filter((song) => song.id !== action.payload);
      });
  },
});

export default songsSlice.reducer;
