import { state } from '@angular/animations';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';


export const SELECTED_COMPONENT_KEY = 'selectedComponent';

export const isSelectedAction = createAction(
    '[SELECTED_COMPONENT_KEY] isSelected',
    props<{ isSelected : boolean }>()
  );
export const setSelectedIdAction = createAction(
    '[SELECTED_COMPONENT_KEY] setSelectedIdAction',
    props<{ selectedId : string}>()
  );

  export interface ISelectedComponent {
    isSelected : boolean,
    selectedId : string,
    width : string,
    height: string
}

export const initialState: ISelectedComponent = {
  isSelected : false,
  selectedId : '',
  width : '',
  height : '',

};
  

  export const selectedComponentReducer = createReducer(
    initialState,

    on(isSelectedAction, (state, action) => ({
      ...state,
      isSelected: action.isSelected 
    })),

    on(setSelectedIdAction, (state, action) => ({
      ...state,
      selectedId: action.selectedId 
    })),
  );



  export const featureSelector = createFeatureSelector<ISelectedComponent>(
    SELECTED_COMPONENT_KEY
  );
  
  export const isSelectedSelector = createSelector(
    featureSelector,
    (state) => state.isSelected
  );
  
  
  export const selectedIdSelector = createSelector(
    featureSelector,
    (state) => state.selectedId
  );
  

  