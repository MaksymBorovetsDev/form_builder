import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { borderRadiusReducer, BORDER_RADIUS_KEY, IBorderRadius } from './borderRadius';
import { borderStyleReducer, BORDER_STYLE_KEY, IBorderStyle } from './borderStyle';
import { borderWidthReducer, BORDER_WIDTH_KEY, IBorderWidth } from './borderWidth';
import { colorRGBReducer, COLOR_RGB_KEY, IColorRGB } from './colorRGB';
import { fontSizeReducer, FONT_SIZE_KEY, IFontSize } from './fontSize';
import { fontWeightReducer, FONT_WEIGHT_KEY, IFontWeight } from './fontWeight';
import { heightReducer, HEIGHT_REDUCER_KEY, IHeight } from './height';

import {
  IInputPlaceholder,
  inputPlaceholderReducer,
  INPUT_PLACEHOLDER,
} from './inputPlaceholder';
import { ITems, itemsReducer, ITEMS_KEY } from './items';
import { ISelectedComponent, selectedComponentReducer, SELECTED_COMPONENT_KEY } from './selectedComponent';
import { IWidth, widthReducer, WIDTH_REDUCER_KEY } from './width';

export interface State {
  [INPUT_PLACEHOLDER]: IInputPlaceholder;
  [WIDTH_REDUCER_KEY]: IWidth;
  [HEIGHT_REDUCER_KEY]: IHeight;
  [FONT_WEIGHT_KEY]: IFontWeight;
  [COLOR_RGB_KEY]: IColorRGB;
  [FONT_SIZE_KEY]: IFontSize;
  [BORDER_STYLE_KEY]: IBorderStyle;
  [BORDER_WIDTH_KEY]: IBorderWidth;
  [BORDER_RADIUS_KEY]: IBorderRadius;
  [SELECTED_COMPONENT_KEY]: ISelectedComponent;
  [ITEMS_KEY]: ITems;
}

export const reducers: ActionReducerMap<State> = {
  [INPUT_PLACEHOLDER]: inputPlaceholderReducer,
  [WIDTH_REDUCER_KEY]: widthReducer,
  [HEIGHT_REDUCER_KEY]: heightReducer,
  [FONT_WEIGHT_KEY]: fontWeightReducer,
  [COLOR_RGB_KEY]: colorRGBReducer,
  [FONT_SIZE_KEY]: fontSizeReducer,
  [BORDER_STYLE_KEY]: borderStyleReducer,
  [BORDER_WIDTH_KEY]: borderWidthReducer,
  [BORDER_RADIUS_KEY]: borderRadiusReducer,
  [SELECTED_COMPONENT_KEY]: selectedComponentReducer,
  [ITEMS_KEY]: itemsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
