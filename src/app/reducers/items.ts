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

// ///////
export const addItemAction = createAction(
  '[ITEMS_KEY] add item',
  props<{
    id: string;
    name: string;
    width: string;
    height: string;
    placeholder: string;
    fontWeight: string;
    fontSize: string;
    colorRGB: string;
    borderStyle: string;
    borderWidth: string;
    borderRadius: string;
  }>()
);

export const editItemStylesAction = createAction(
  '[ITEMS_KEY] edit item styles',
  props<{
    id: string;
    width: string;
    height: string;
    placeholder: string;
    fontSize: string;
    colorRGB: string;
    borderWidth: string;
    borderRadius: string;
  }>()
);

export const editFontWeiAction = createAction(
  '[ITEMS_KEY] edit item fontWeight',
  props<{ id: string; fontWeight: string }>()
);


export const editBorderStyleAction = createAction(
  '[ITEMS_KEY] edit item borderStyle',
  props<{ id: string; borderStyle: string }>()
);

// //////



export interface ITem {
  id: string;
  name: string;
  width: string;
  height: string;
  placeholder: string;
  fontWeight: string;
  fontSize: string;
  colorRGB: string;
  borderStyle: string;
  borderWidth: string;
  borderRadius: string;
}

export interface ITems {

  items: ITem[];
}

export const initialState: ITems = {
  items: [],
};

export const itemsReducer = createReducer(
  initialState,

  on(addItemAction, (state, action) => ({
    ...state,
    items: [
      ...state.items,
      {
        id: action.id,
        name: action.name,
        width: action.width,
        height: action.height,
        placeholder: action.placeholder,
        fontWeight: action.fontWeight,
        fontSize: action.fontSize,
        colorRGB: action.colorRGB,
        borderStyle: action.borderStyle,
        borderWidth: action.borderWidth,
        borderRadius: action.borderRadius,
      },
    ],
  })),

  on(editItemStylesAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            width: action.width + 'px',
            height: action.height + 'px',
            placeholder: action.placeholder,
            fontSize: action.fontSize + 'px',
            colorRGB: action.colorRGB,
            borderWidth: action.borderWidth + 'px',
            borderRadius: action.borderRadius + 'px',
          }
        : item
    ),
  })),


  on(editFontWeiAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            fontWeight: action.fontWeight,
          }
        : item
    ),
  })),


  on(editBorderStyleAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            borderStyle: action.borderStyle,
          }
        : item
    ),
  })),




);

export const featureSelector = createFeatureSelector<ITems>(ITEMS_KEY);

export const itemsSelector = createSelector(
  featureSelector,
  (state) => state.items
);
