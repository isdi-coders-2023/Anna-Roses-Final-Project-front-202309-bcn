import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { neighboursReducer } from "./features/neighbours/neighboursSlice";

export const store = configureStore({
  reducer: {
    neighbourState: neighboursReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
