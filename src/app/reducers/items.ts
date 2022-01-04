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
// //////

export const editItemWidthAction = createAction(
  '[ITEMS_KEY] edit item width',
  props<{ id: string; width: string }>()
);

export const editItemHeightAction = createAction(
  '[ITEMS_KEY] edit item height',
  props<{ id: string; height: string }>()
);

export const editItemPlaceholderAction = createAction(
  '[ITEMS_KEY] edit item placeholder',
  props<{ id: string; placeholder: string }>()
);

export const editItemFontWeightAction = createAction(
  '[ITEMS_KEY] edit item fontWeight',
  props<{ id: string; fontWeight: string }>()
);

export const editItemFontSizeAction = createAction(
  '[ITEMS_KEY] edit item fontSize',
  props<{ id: string; fontSize: string }>()
);

export const editItemColorRGBAction = createAction(
  '[ITEMS_KEY] edit item colorRGB',
  props<{ id: string; colorRGB: string }>()
);


export const editBorderStyleAction = createAction(
  '[ITEMS_KEY] edit item borderStyle',
  props<{ id: string; borderStyle: string }>()
);


export const editBorderWidthAction = createAction(
  '[ITEMS_KEY] edit item borderWidth',
  props<{ id: string; borderWidth: string }>()
);



export const editBorderRadiusAction = createAction(
  '[ITEMS_KEY] edit item borderRadius',
  props<{ id: string; borderRadius: string }>()
);





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

  on(editItemWidthAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            width: action.width + 'px',
          }
        : item
    ),
  })),

  on(editItemHeightAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            height: action.height + 'px',
          }
        : item
    ),
  })),

  on(editItemPlaceholderAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            placeholder: action.placeholder,
          }
        : item
    ),
  })),

  on(editItemFontWeightAction, (state, action) => ({
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

  on(editItemFontSizeAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            fontSize: action.fontSize + 'px',
          }
        : item
    ),
  })),


  on(editItemColorRGBAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            colorRGB: action.colorRGB,
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

  on(editBorderWidthAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            borderWidth: action.borderWidth + 'px',
          }
        : item
    ),
  })),

  on(editBorderRadiusAction, (state, action) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === action.id
        ? {
            ...item,
            borderRadius: action.borderRadius + 'px',
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
