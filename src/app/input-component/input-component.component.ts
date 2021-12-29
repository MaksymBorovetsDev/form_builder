import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { inputPayload, selectedInputPlaceholder } from '../reducers/selectedComponentStyle';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
  
})
export class InputComponentComponent implements OnInit {
  inputPlaceholder$ = this.store.select(selectedInputPlaceholder)
  clear(){
    this.store.dispatch(inputPayload({inputPlaceholder: ''}))
  }

  value = 'Clear You';

  constructor(private store : Store) { }

  ngOnInit(): void {
  }


}
