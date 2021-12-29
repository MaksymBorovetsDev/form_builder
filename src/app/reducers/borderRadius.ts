import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const BORDER_RADIUS_KEY = 'borderRadius';

export const borderRadiusAction = createAction(
    '[BORDER_RADIUS_KEY] borderRadius',
    props<{ borderRadius : string }>()
  );

  export interface IBorderRadius{
    borderRadius : string,
}

export const initialState: IBorderRadius = {
  borderRadius : '',
};
  

  export const borderRadiusReducer = createReducer(
    initialState,

    on(borderRadiusAction, (state, action) => ({
      ...state,
      borderRadius: action.borderRadius + 'px'
    })),
  );



  export const featureSelector = createFeatureSelector<IBorderRadius>(
    BORDER_RADIUS_KEY
  );
  
  export const borderRadiusSelector = createSelector(
    featureSelector,
    (state) => state.borderRadius
  );
  

  