import { createSlice } from '@reduxjs/toolkit';

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
