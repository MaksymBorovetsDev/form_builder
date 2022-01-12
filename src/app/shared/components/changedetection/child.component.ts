import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { from, map, of } from 'rxjs';
import { setBorderRadiusAction } from 'src/app/reducers/formStyles';

@Component({
  selector: 'child',
  template: `
    <div class="child-container">
      <h3>Child component</h3>
      <pre>{{data}}</pre>
    </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() data!: any;
  constructor(private store: Store) {}
  data$ = of(this.data)

dispatch (){
  this.store.dispatch(
    setBorderRadiusAction({ borderRadius: this.data.size.toString()}))
}

  ngOnInit() {
     this.data$.pipe(map(val => val)).subscribe((val)=> console.log(val))
}
}
