import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromEvent, of, Subject, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { colorRGBAction } from '../reducers/colorRGB';
import { fontSizeAction } from '../reducers/fontSize';
import { heightAction } from '../reducers/height';
import { inputPlaceholderAction } from '../reducers/inputPlaceholder';
import { addItemAction, editItemColorRGBAction, editItemFontSizeAction, editItemHeightAction, editItemPlaceholderAction, editItemWidthAction, ITem, itemsSelector } from '../reducers/items';
import { selectedIdSelector } from '../reducers/selectedComponent';

import { widthAction } from '../reducers/width';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  items = ['Styles Controler'];
  expandedIndex = 0;
  value = '';
  widthValue = '';
  heightValue = '';
  colorRGBValue = '';
  fontSizeValue = '';
  inputPlaceholder = new FormControl('');
  width = new FormControl('');
  height = new FormControl('');
  colorRGB = new FormControl('');
  fontSize = new FormControl('');
  selectedId = ''
  itemData : ITem[]= []


  constructor(private store: Store) {
    // this.inputPlaceholder.valueChanges
    //   .pipe(debounceTime(500), distinctUntilChanged())
    //   .subscribe((val) =>
    //     this.store.dispatch(inputPlaceholderAction({ inputPlaceholder: val }))
    //   );

    this.width.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) =>
        this.store.dispatch(editItemWidthAction({ id: this.selectedId, width: val}))
      );

    this.height.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) =>
        this.store.dispatch(editItemHeightAction({ id: this.selectedId, height: val}))
      );
      

    this.inputPlaceholder.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) =>
        this.store.dispatch(editItemPlaceholderAction({ id: this.selectedId, placeholder: val}))
      );
      

      
    this.colorRGB.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) =>
        this.store.dispatch(editItemColorRGBAction({ id: this.selectedId, colorRGB : val }))
      );
      
    this.fontSize.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) =>
        this.store.dispatch(editItemFontSizeAction({ id: this.selectedId, fontSize : val }))
      );
  }

  ngOnInit(
  ) {

    this.store.select(selectedIdSelector).subscribe(data => {this.selectedId = data} )
  }
}


