import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Action, Button, Label, Panel } from './interfaces';
import { INITIAL_STATE } from './constants';

export const contentSlice = createSlice({
  name: 'content',
  initialState: INITIAL_STATE,

  reducers: {
    change: (state: Array<Panel | Label | Button>, action: Action) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore element implicitly has an 'any' type
      // const destination = action.payload.path.slice(1, -1).reduce((acc, item) => acc[item], state);
      console.log([...state], action);

      // state = [...state, destination[pathArray.slice(-1)]: action.payload.newValue];
    },
  },
});

export const { change } = contentSlice.actions;

export default contentSlice.reducer;
