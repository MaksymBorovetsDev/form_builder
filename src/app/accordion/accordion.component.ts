import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
  switchMapTo,
} from 'rxjs/operators';

import { editItemStylesAction, ITem, itemsSelector } from '../reducers/items';

import {
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
    this.borderStyle = title;
  }

  dispatchFontWeight(title: string) {}

  stylesForm = new FormGroup({
    height: new FormControl(),
    width: new FormControl(),
    colorRGB: new FormControl(),
    fontSize: new FormControl(),
    inputPlaceholder: new FormControl(),
    borderRadius: new FormControl(),
    borderWidth: new FormControl(),
  });

  constructor(private store: Store) {}

  ngOnInit() {
    this.stylesForm.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
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

    // this.store.select(selectedWidthSelector).subscribe((data) => {
    //   this.widthValue = data.slice(0, -2);
    //   this.stylesForm.patchValue({
    //     height: this.heightValue,
    //     width: this.widthValue,
    //     colorRGB: this.colorRGBValue,
    //     fontSize: '',
    //     inputPlaceholder: '',
    //     borderRadius: '',
    //     borderWidth: '',
    //   })
    //   console.log('1')
    // });

    this.store
      .select(selectedIDSelector)
      .pipe(switchMapTo(this.store.select(selectedWidthSelector)))
      .subscribe((data) => {
        this.widthValue = data.slice(0, -2);
      });

    // this.store.select(selectedWidthSelector).subscribe((data) => {
    //   this.widthValue = data.slice(0, -2);
    // });

    this.store.select(selectedHeightSelector).subscribe((data) => {
      this.heightValue = data.slice(0, -2);
    });

    this.store.select(selectedPlaceholderSelector).subscribe((data) => {
      this.placeholderValue = data;
    });
  }
}

// this.store
//   .select(itemsSelector)
//   .pipe(
//     map((dataArray: ITem[]) =>
//       dataArray.filter(
//         (dataObject: any) => dataObject.id === this.selectedId
//       )
//     )
//     map(())
//   )
//   .subscribe((data) => {
//     this.widthValue = data.map(i => i.width).toString();
//   });
