import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { setBorderStyleAction, setFontWeightAction, setFormStylesAction } from 'src/app/reducers/formStyles';
import { Unsubscribe } from 'src/app/shared/base.unsubscribe.component';

@Component({
  selector: 'app-global-styles-accordeon',
  templateUrl: './global-styles-accordeon.component.html',
  styleUrls: ['./global-styles-accordeon.component.scss'],
})
export class GlobalStylesAccordeonComponent
  extends Unsubscribe
  implements OnInit
{

  constructor(private store: Store) {
    super();
  }

  placeholderValue = '';
  textColorValue = '';
  backgroundColorValue = '';
  fontSizeValue = '';
  borderStyleValue = '';
  fontWeightValue = '';

  formStylesForm = new FormGroup({
    placeholder: new FormControl(),
    textColor: new FormControl(),
    backgroundColor: new FormControl(),
    fontSize: new FormControl(),
  });

  dispatchFontWeight(title: string){
    this.store.dispatch(setFontWeightAction({fontWeight: title}))
  }


  dispatchBorderStyle(title: string){
    this.store.dispatch(setBorderStyleAction({borderStyle: title}))

  }


  ngOnInit(): void {
    this.formStylesForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((val) =>
        this.store.dispatch(
          setFormStylesAction({
            placeholder: val.placeholder,
            fontSize: val.fontSize,
            textColor: val.textColor,
            backgroundColor: val.backgroundColor,
          })
        )
      );
  }
}
