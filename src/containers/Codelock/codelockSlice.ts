import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CodelockState {
  value: string;
  check: string;
  isNumbersDisabled: boolean;
  isCheckDisabled: boolean;
  isDeleteDisabled: boolean;
}

const initialState: CodelockState = {
  value: '',
  check: '1111',
  isNumbersDisabled: false,
  isCheckDisabled: true,
  isDeleteDisabled: true,
};

export const codelockSlice = createSlice({
  name: 'codelock',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      if (state.value.length === 4) {
        state.isNumbersDisabled = true;
        state.isCheckDisabled = false;
      }
      if (state.value.length > 0) {
        state.isDeleteDisabled = false;
      }
    },
    check: (state) => {
      if (state.value === state.check) {
        state.value = 'ACCESS GRANTED';
      } else {
        state.value = 'WRONG CODE';
      }
    },
    deleteSymbol: (state) => {
      state.value = state.value.substring(0, state.value.length - 1);
      if (state.value.length < 4) {
        state.isNumbersDisabled = false;
        state.isCheckDisabled = true;
      } else if (state.value.length === 0) {
        state.isDeleteDisabled = true;
        state.isNumbersDisabled = false;
      }
    },
    reset: () => initialState,
  },
});

export const codelockReducer = codelockSlice.reducer;
export const { add, check, deleteSymbol, reset } = codelockSlice.actions;
