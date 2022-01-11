import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
import { interval, Subject, timer } from 'rxjs';

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
import { Unsubscribe } from '../shared/base.unsubscribe.component';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent extends Unsubscribe implements OnInit {
  @Input() selectedId: string = '';
  @Input() name: string = '';

  items = ['Form Styles Control'];

  borderStyleValue: string = 'none';
  borderWidthValue = '';
  fontWeight: string = 'normal';
  borderRadiusValue = '';
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
    // this.store.dispatch(
    //   editFontWeightAction({ id: this.selectedId, fontWeight: title })
    // );
  }

  stylesForm = new FormGroup({
    height: new FormControl(),
    width: new FormControl(),
    colorRGB: new FormControl(),
    fontSize: new FormControl(),
    inputPlaceholder: new FormControl(),
    borderRadius: new FormControl(),
    borderWidth: new FormControl(),
    fontWeight: new FormControl(),
    
  });

  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    this.stylesForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.ngUnsubscribe)
      )
      .pipe(
        tap((val) => console.log(`BEFORE MAP: ${val}`)),
        map((val) => val),
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
            fontWeight: val.fontWeight
          })
        )
      );

    this.store
      .select(selectedIDSelector)
      .pipe(
        switchMapTo(this.store.select(selectedWidthSelector)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((data) => {
        this.widthValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(
        switchMapTo(this.store.select(selectedHeightSelector)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((data) => {
        this.heightValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(
        switchMapTo(this.store.select(selectedPlaceholderSelector)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((data) => {
        this.placeholderValue = data;
      });

    this.store
      .select(selectedIDSelector)
      .pipe(
        switchMapTo(this.store.select(selectedFontSizeSelector)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((data) => {
        this.fontSizeValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(
        switchMapTo(this.store.select(selectedColorRGBSelector)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((data) => {
        this.colorRGBValue = data;
      });

    this.store
      .select(selectedIDSelector)
      .pipe(
        switchMapTo(this.store.select(selectedBorderWidthSelector)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((data) => {
        this.borderWidthValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(
        switchMapTo(this.store.select(selectedBorderRadiusSelector)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((data) => {
        this.borderRadiusValue = data.slice(0, -2);
      });

    this.store
      .select(selectedIDSelector)
      .pipe(
        switchMapTo(this.store.select(selectedBorderStyleSelector)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((data) => {
        this.borderStyleValue = data;
      });
  }

}
