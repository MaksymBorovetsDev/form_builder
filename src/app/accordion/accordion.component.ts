import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
  takeUntil,
  tap,
  switchMapTo,
} from 'rxjs/operators';
import { interval, timer } from 'rxjs';


import {
  editBorderStyleAction,
  editFontWeightAction,
  editItemStylesAction,
} from '../reducers/items';

import {
  selectedBorderRadiusSelector,
  selectedBorderStyleSelector,
  selectedBorderWidthSelector,
  selectedColorRGBSelector,
  selectedFontSizeSelector,
  selectedHeightSelector,
  selectedIDSelector,
  selectedPlaceholderSelector,
  selectedWidthSelector,
} from '../reducers/selectedComponent';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() selectedId: string = '';
  @Input() name: string = '';

  items = ['Global Controls'];
  borderStyle: string = 'none';
  borderWidthValue = '';
  fontWeight: string = 'normal';
  borderRadiusValue = '';
  expandedIndex = 0;
  placeholderValue = '';
  heightValue = '';
  widthValue = '';
  colorRGBValue = '';
  fontSizeValue = '';

  setBorderStyle(title: string) {
    this.store.dispatch(
      editBorderStyleAction({ id: this.selectedId, borderStyle: title })
    );
  }

  dispatchFontWeight(title: string) {
    this.store.dispatch(
      editFontWeightAction({ id: this.selectedId, fontWeight: title })
    );
  }

  stylesForm = new FormGroup({
    height: new FormControl(),
    width: new FormControl(),
    colorRGB: new FormControl(),
    fontSize: new FormControl(),
    inputPlaceholder: new FormControl(),
    borderRadius: new FormControl(),
    borderWidth: new FormControl(),
  });

  constructor(private store: Store) {


  }

  ngOnInit() {
    this.stylesForm.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .pipe(
        tap((val) => console.log(`BEFORE MAP: ${val}`)),
        map((val) => val ),
        tap((val) => console.log(`AFTER MAP: ${val}`))
      )
      .subscribe((val) =>

        this.store.dispatch(
          editItemStylesAction({
            id: this.selectedId,
            width: val.width,
            height: val.height,
            placeholder: val.inputPlaceholder,
            fontSize: val.fontSize,
            colorRGB: val.colorRGB,
            borderWidth: val.borderWidth,
            borderRadius: val.borderRadius,
          })
        )
      );

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedWidthSelector)))
      .subscribe((data) => {
        this.widthValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedHeightSelector)))
      .subscribe((data) => {
        this.heightValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedPlaceholderSelector)))
      .subscribe((data) => {
        this.placeholderValue = data;
      });

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedFontSizeSelector)))
      .subscribe((data) => {
        this.fontSizeValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedColorRGBSelector)) )
      .subscribe((data) => {
        this.colorRGBValue = data;
      });

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedBorderWidthSelector)))
      .subscribe((data) => {
        this.borderWidthValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedBorderRadiusSelector)))
      .subscribe((data) => {
        this.borderRadiusValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedBorderStyleSelector)))
      .subscribe((data) => {
        this.borderStyle = data;
      });
  }
}
