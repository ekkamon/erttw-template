import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combinedReducer, rootReducer } from 'renderer/redux/reducer';

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
export type TypedAction<T> = { type: string; payload: T };

export const store = configureStore<RootState>({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
