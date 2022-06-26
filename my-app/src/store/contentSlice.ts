import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Button, Label, Panel } from './interfaces';

const initialState: Array<Panel | Label | Button> = [
  {
    type: 'panel',
    props: {
      width: 500,
      height: 200,
      visible: true,
    },
  },
  {
    type: 'label',
    props: {
      caption: 'test',
      visible: false,
    },
  },
  // {
  //   type: 'button',
  //   props: {
  //     width: 100,
  //     height: 50,
  //     visible: true,
  //   },
  // },
];

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

export default contentSlice.reducer;
