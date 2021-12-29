import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const WIDTH_REDUCER_KEY = 'selectedWidth';

export const widthAction = createAction(
    '[WIDTH_REDUCER_KEY] width',
    props<{ width : string }>()
  );

  export interface IWidth {
    width : string,
}

export const initialState: IWidth = {
    width : '',
  };
  

  export const widthReducer = createReducer(
    initialState,

    on(widthAction, (state, action) => ({
      ...state,
      width: action.width + 'px'
    })),
  );



  export const featureSelector = createFeatureSelector<IWidth>(
    WIDTH_REDUCER_KEY
  );
  
  export const selectedWidth = createSelector(
    featureSelector,
    (state) => state.width
  );
  