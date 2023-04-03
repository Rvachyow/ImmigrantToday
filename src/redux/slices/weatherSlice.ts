import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk("weather/getWeather", async(params:string) => {
  let { data } = await 
  axios(`http://api.weatherapi.com/v1/current.json?key=eec5758360d14b7b815140717231703&q=${params}`);
  return data;
});
const initialState:any = {
  items: [],    
};
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.items = null;
        state.status = "loading";})
      .addCase(getWeather.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";})
      .addCase(getWeather.rejected, (state) => {
        state.items = null;});   
  },
});
export const weatherReducer = weatherSlice.reducer;
