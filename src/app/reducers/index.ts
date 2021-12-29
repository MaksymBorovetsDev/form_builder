import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { fontWeightReducer, FONT_WEIGHT_KEY, IFontWeight } from './fontWeight';
import { heightReducer, HEIGHT_REDUCER_KEY, IHeight } from './height';

import {
  IInputPlaceholder,
  inputPlaceholderReducer,
  INPUT_PLACEHOLDER,
} from './inputPlaceholder';
import { IWidth, widthReducer, WIDTH_REDUCER_KEY } from './width';

export interface State {
  [INPUT_PLACEHOLDER]: IInputPlaceholder;
  [WIDTH_REDUCER_KEY]: IWidth;
  [HEIGHT_REDUCER_KEY]: IHeight;
  [FONT_WEIGHT_KEY]: IFontWeight;
}

export const reducers: ActionReducerMap<State> = {
  [INPUT_PLACEHOLDER]: inputPlaceholderReducer,
  [WIDTH_REDUCER_KEY]: widthReducer,
  [HEIGHT_REDUCER_KEY]: heightReducer,
  [FONT_WEIGHT_KEY]: fontWeightReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
