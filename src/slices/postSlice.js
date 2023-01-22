import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import API from "../constant";

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    data: []
  },
  reducers: {
    resetData: (state, action) => {
      state.data = action.payload.slice(0, 10);
    },
    setData: (state, action) => {
      state.data = [...state.data, action.payload];
    }
  }
})

export const { resetData, setData } = postSlice.actions

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(API._URL);
    dispatch(resetData(response.data));
  } catch (err) {
    console.error(err);
  }
};

export const create = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(API._URL, { ...payload, userId: 1 });
    dispatch(setData(response.data));
  } catch (err) {
    console.error(err);
  }
};

export default postSlice.reducer