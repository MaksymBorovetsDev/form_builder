import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  clear(){
    this.store.dispatch(inputPlaceholderAction({inputPlaceholder: ''}))
  }



  constructor(private store : Store) { }

  ngOnInit(): void {
  }


}
