import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromEvent, of, Subject, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { heightAction } from '../reducers/height';
import { inputPlaceholderAction } from '../reducers/inputPlaceholder';

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
  inputPlaceholder = new FormControl('');
  width = new FormControl('');
  height = new FormControl('');


  constructor(private store: Store) {
    this.inputPlaceholder.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) =>
        this.store.dispatch(inputPlaceholderAction({ inputPlaceholder: val }))
      );
      
    this.width.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) =>
        this.store.dispatch(widthAction({ width: val }))
      );
      
    this.height.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) =>
        this.store.dispatch(heightAction({ height : val }))
      );
  }

  ngOnInit() {}
}


