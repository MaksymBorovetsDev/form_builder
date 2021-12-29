import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const ITEMS_KEY = 'items';

export const trueIsSelectedAction = createAction('[ITEMS_KEY] trueIsSelectedAction');
export const falseIsSelectedAction = createAction('[ITEMS_KEY] falseIsSelectedAction');
export const addItem = createAction(
  '[ITEMS_KEY] addItem',
  props<{ id: number, title: string, selected: boolean }>()
);

export interface Item {
  title: string;
  id: number;
  selected: boolean;
}

export interface ItemsState {
  itemsList: Item[];
  isSelected: boolean
}

export const initialState: ItemsState = {
  itemsList: [],
  isSelected: false
};

export const itemsReducer = createReducer(
  initialState,

  on(addItem, (state, action) => ({
    ...state,
    itemsList : [...state.itemsList,{ id: action.id, title: action.title, selected: action.selected}]
  })),
  on(trueIsSelectedAction, (state) => ({
    ...state,
    isSelected: true,
  })),
  on(falseIsSelectedAction, (state) => ({
    ...state,
    isSelected: false,
  })),

);

export const featureSelector = createFeatureSelector<ItemsState>(ITEMS_KEY);
export const itemListSelector = createSelector(
  featureSelector,
  (state) => state.itemsList
);
export const isSelectedSelector = createSelector(
  featureSelector,
  (state) => state.itemsList
);
