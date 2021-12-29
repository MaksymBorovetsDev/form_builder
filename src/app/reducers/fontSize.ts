import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const FONT_SIZE_KEY = 'fontSize';

export const fontSizeAction = createAction(
    '[FONT_SIZE_KEY] fontSize',
    props<{ fontSize : string }>()
  );

  export interface IFontSize {
    fontSize : string,
}

export const initialState: IFontSize = {
    fontSize : '',
};
  

  export const fontSizeReducer = createReducer(
    initialState,

    on(fontSizeAction, (state, action) => ({
      ...state,
      fontSize: action.fontSize + 'px'
    })),
  );



  export const featureSelector = createFeatureSelector<IFontSize>(
    FONT_SIZE_KEY
  );
  
  export const FontSizeSelector = createSelector(
    featureSelector,
    (state) => state.fontSize
  );
  

  