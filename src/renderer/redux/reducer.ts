import { AnyAction, combineReducers, Reducer } from 'redux';
import { RootState } from 'renderer/redux/store';

import counterReducer from './features/counter';

export const combinedReducer = combineReducers({
  counter: counterReducer,
});

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return combinedReducer(state, action);
};
