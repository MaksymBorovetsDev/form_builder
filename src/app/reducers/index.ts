import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReducer, CounterState, COUNTER_KEY } from './counter';
import { itemsReducer, ItemsState, ITEMS_KEY } from './items';
import { SelectedComponentState, selectedComponentStylesReducer, SELECTED_COMPONENT_STYLES_KEY } from './selectedComponentStyle';


export interface State {
  [COUNTER_KEY]: CounterState;
  [SELECTED_COMPONENT_STYLES_KEY]: SelectedComponentState;
  [ITEMS_KEY]: ItemsState;

}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
  [SELECTED_COMPONENT_STYLES_KEY]: selectedComponentStylesReducer,
  [ITEMS_KEY]: itemsReducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
