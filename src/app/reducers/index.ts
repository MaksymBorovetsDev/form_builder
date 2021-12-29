import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, CounterState, COUNTER_KEY } from './counter';
import { itemsReducer, ItemsState, ITEMS_KEY } from './items';
import { IInputPlaceholder, inputPlaceholderReducer, INPUT_PLACEHOLDER } from './inputPlaceholder';
import { IWidth, widthReducer, WIDTH_REDUCER_KEY } from './width';

export interface State {
  [COUNTER_KEY]: CounterState;
  [INPUT_PLACEHOLDER]: IInputPlaceholder;
  [ITEMS_KEY]: ItemsState;
  [WIDTH_REDUCER_KEY]: IWidth;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
  [INPUT_PLACEHOLDER]: inputPlaceholderReducer,
  [ITEMS_KEY]: itemsReducer,
  [WIDTH_REDUCER_KEY]: widthReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
