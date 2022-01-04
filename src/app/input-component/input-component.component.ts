import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { borderRadiusSelector } from '../reducers/borderRadius';
import { borderStyleSelector } from '../reducers/borderStyle';
import { borderWidthSelector } from '../reducers/borderWidth';
import { selectedColorRGB } from '../reducers/colorRGB';
import { FontSizeSelector } from '../reducers/fontSize';
import { selectedFontWeight } from '../reducers/fontWeight';
import { selectedHeight } from '../reducers/height';
import {  inputPlaceholderAction, selectedInputPlaceholder } from '../reducers/inputPlaceholder';
import { isSelectedSelector, selectedIdSelector } from '../reducers/selectedComponent';

import { selectedWidth } from '../reducers/width';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
  
})
export class InputComponentComponent implements OnInit {
  @Input() id: string = ''
  @Input() width: string = '160px'
  @Input() height: string = '20px'
  @Input() placeholder: string = ''
  @Input() fontWeight: string = 'normal'
  @Input() fontSize: string = '5px'
  @Input() colorRGB: string = 'black'
  @Input() borderStyle: string = 'none'
  @Input() borderWidth: string = '1px'
  @Input() borderRadius: string = '1px'


  inputPlaceholder$ = this.store.select(selectedInputPlaceholder)
  width$ = this.store.select(selectedWidth)
  height$ = this.store.select(selectedHeight)
  fontWeight$ = this.store.select(selectedFontWeight)
  colorRGB$ = this.store.select(selectedColorRGB)
  fontSize$ = this.store.select(FontSizeSelector)
  borderStyle$ = this.store.select(borderStyleSelector)
  borderWidth$ = this.store.select(borderWidthSelector)
  borderRadius$ = this.store.select(borderRadiusSelector)
  selectedId = ''


  clear(){
    this.store.dispatch(inputPlaceholderAction({inputPlaceholder: ''}))
  }



  constructor(private store : Store) {

  }

  ngOnInit(): void {
    this.store.select(selectedIdSelector).subscribe(data=> {this.selectedId = data})


  }


}
