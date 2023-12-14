import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CodelockState {
  value: string
}

const initialState: CodelockState = {
  value: ''
}

export const codelockSlice = createSlice ({
  name:'codelock',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  }
})

export const codelockReducer = codelockSlice.reducer
export const {add} = codelockSlice.actions
