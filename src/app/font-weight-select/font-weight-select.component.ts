import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fontWeightAction } from '../reducers/fontWeight';

@Component({
  selector: 'app-font-weight-select',
  templateUrl: './font-weight-select.component.html',
  styleUrls: ['./font-weight-select.component.scss']
})
export class FontWeightSelectComponent implements OnInit {

  labelPosition: 'medium' | "bold" = 'medium';
  dispatchValue(type : string){
    this.store.dispatch(fontWeightAction({fontWeight: type}))
  }
  constructor(private store: Store) {

   }

  ngOnInit(): void {
  }

}
