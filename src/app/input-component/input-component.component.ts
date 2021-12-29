import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedColorRGB } from '../reducers/colorRGB';
import { FontSizeSelector } from '../reducers/fontSize';
import { selectedFontWeight } from '../reducers/fontWeight';
import { selectedHeight } from '../reducers/height';
import {  inputPlaceholderAction, selectedInputPlaceholder } from '../reducers/inputPlaceholder';
import { selectedWidth } from '../reducers/width';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
  
})
export class InputComponentComponent implements OnInit {
  inputPlaceholder$ = this.store.select(selectedInputPlaceholder)
  width$ = this.store.select(selectedWidth)
  height$ = this.store.select(selectedHeight)
  fontWeight$ = this.store.select(selectedFontWeight)
  colorRGB$ = this.store.select(selectedColorRGB)
  fontSize$ = this.store.select(FontSizeSelector)

  clear(){
    this.store.dispatch(inputPlaceholderAction({inputPlaceholder: ''}))
  }



  constructor(private store : Store) { }

  ngOnInit(): void {
  }


}
