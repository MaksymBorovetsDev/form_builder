import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fontWeightAction } from '../reducers/fontWeight';
import { editItemFontWeightAction, editItemPlaceholderAction } from '../reducers/items';

@Component({
  selector: 'app-font-weight-select',
  templateUrl: './font-weight-select.component.html',
  styleUrls: ['./font-weight-select.component.scss']
})
export class FontWeightSelectComponent implements OnInit {
  @Input() id: string = ''

  labelPosition: 'medium' | "bold" = 'medium';

  dispatchValue( type : string){
    this.store.dispatch(editItemFontWeightAction({id: this.id, fontWeight: type}))
  }
  constructor(private store: Store) {

   }

  ngOnInit(): void {
  }

}
