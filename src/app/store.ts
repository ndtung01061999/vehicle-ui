import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import common from './common.reducer';
import student from '../features/Students/redux/student.reducer';
import khoa from '../features/khoa/redux/khoa.reducer';
export const store = configureStore({
  reducer: {
    common,
    student,
    khoa
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
