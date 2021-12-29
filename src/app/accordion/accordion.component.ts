import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromEvent, of, Subject, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { inputPayload } from '../reducers/selectedComponentStyle';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  items = ['Item 1'];
  expandedIndex = 0;

  name = new FormControl('');




  log() {
 
  }

  constructor(private store: Store) {


    this.name.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((val)=> this.store.dispatch(inputPayload({ inputPlaceholder: val })))

    
  }



  ngOnInit() {}

}
