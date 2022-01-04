import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { borderRadiusAction } from '../reducers/borderRadius';
import { borderStyleAction } from '../reducers/borderStyle';
import { borderWidthAction } from '../reducers/borderWidth';
import { editBorderRadiusAction, editBorderStyleAction, editBorderWidthAction } from '../reducers/items';

@Component({
  selector: 'app-border-styles-controler',
  templateUrl: './border-styles-controler.component.html',
  styleUrls: ['./border-styles-controler.component.scss']
})
export class BorderStylesControlerComponent implements OnInit {
  @Input() id: string = ''

  borderWidthValue = ''
  borderRadiusValue = ''
  borderRadius = new FormControl('')
  borderWidth = new FormControl('')

  dispatchValue(title: string){
    this.store.dispatch(editBorderStyleAction({id: this.id, borderStyle: title}))
  }

  constructor(private store: Store) {
    this.borderWidth.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
    .subscribe((val) =>
      this.store.dispatch(editBorderWidthAction({ id: this.id, borderWidth: val }))
    );
    this.borderRadius.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
    .subscribe((val) =>
      this.store.dispatch(editBorderRadiusAction({id: this.id, borderRadius: val }))
    );
    
   }

  ngOnInit(): void {
  }

}
