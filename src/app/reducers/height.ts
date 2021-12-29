import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const HEIGHT_REDUCER_KEY = 'selectedHeight';

export const heightAction = createAction(
    '[HEIGHT_REDUCER_KEY] height',
    props<{ height : string }>()
  );

  export interface IHeight {
    height : string,
}

export const initialState: IHeight = {
    height : '',
  };
  

  export const heightReducer = createReducer(
    initialState,

    on(heightAction, (state, action) => ({
      ...state,
      height: action.height + 'px'
    })),
  );



  export const featureSelector = createFeatureSelector<IHeight>(
    HEIGHT_REDUCER_KEY
  );
  
  export const selectedHeight = createSelector(
    featureSelector,
    (state) => state.height
  );
  