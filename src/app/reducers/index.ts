import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { formStylesReducer, FORM_STYLES_KEY, IFormStyles } from './formStyles';
import { ITems, itemsReducer, ITEMS_KEY } from './items';
import { ISelectedConfigs, selectedComponentReducer, SELECTED_COMPONENT_KEY } from './selectedComponent';
import { IUser, userReducer, USER_KEY } from './user';


export interface State {

  [SELECTED_COMPONENT_KEY]: ISelectedConfigs;
  [ITEMS_KEY]: ITems;
  [USER_KEY]: IUser;
  [FORM_STYLES_KEY]: IFormStyles;
}

export const reducers: ActionReducerMap<State> = {


  [SELECTED_COMPONENT_KEY]: selectedComponentReducer,
  [ITEMS_KEY]: itemsReducer,
  [USER_KEY]: userReducer,
  [FORM_STYLES_KEY]: formStylesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
