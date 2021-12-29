import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import {
  clear,
  countSelector,
  decrease,
  increase,
  updatedAtSelector,
} from '../reducers/counter';
import { map, filter } from 'rxjs/operators';
import { selectedInputPlaceholder, selectedSelector, setSelectedAction } from '../reducers/selectedComponentStyle';
import { addItem, itemListSelector } from '../reducers/items';
import { interval } from 'rxjs';

export interface DragAndDropData{
  name: string,
  id: number
}

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.scss'],
})
export class DraganddropComponent implements OnInit {
  value: string = 'Clear me';

  // inputPlaceholder$ = this.store.select(selectedInputPlaceholder)
  
  date = Math.floor(Math.random() * 7373)
  dispatchArray(title: string) {

      this.store.dispatch(addItem({id: +Date.now(), selected: true, title: title }))
      
      
  }
  log(data: any){ console.log(data)}


  

  todo: DragAndDropData[] = [];

  done: DragAndDropData[] = [{name :'input',  id: +this.date}, {name :'button', id: 2} ,  {name :'textarea', id: 3}, {name :'checkbox', id: 4 },{name :'select option', id: 5}];

  drop(event: CdkDragDrop<DragAndDropData[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    }


  }

  ngOnInit(): void {
    
  }

  // counter

  constructor(private store: Store) {
  }

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  increase(): void {
    this.store.dispatch(increase());
  }
  decrease(): void {
    this.store.dispatch(decrease());
  }
  clear(): void {
    this.store.dispatch(clear());
  }

  // /////////////
}
