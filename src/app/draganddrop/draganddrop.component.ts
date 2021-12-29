import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';


import { interval } from 'rxjs';

export interface DragAndDropData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.scss'],
})
export class DraganddropComponent implements OnInit {
  value: string = 'Clear me';

  date = Math.floor(Math.random() * 7373);

  log(data: any) {
    console.log(data);
  }

  todo: DragAndDropData[] = [];

  done: DragAndDropData[] = [
    { name: 'input', id: +this.date },
    { name: 'button', id: 2 },
    { name: 'textarea', id: 3 },
    { name: 'checkbox', id: 4 },
    { name: 'select option', id: 5 },
  ];

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

  ngOnInit(): void {}

  constructor(private store: Store) {}
}
