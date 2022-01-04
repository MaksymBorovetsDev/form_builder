import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import {
  initialState,
  isSelectedAction,
  isSelectedSelector,
  selectedIdSelector,
  SELECTED_COMPONENT_KEY,
  setSelectedIdAction,
} from '../reducers/selectedComponent';
import { addItemAction, ITem, ITems, itemsSelector } from '../reducers/items';

export interface DragAndDropData {
  name: string;
  id?: string;
}

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.scss'],
})
export class DraganddropComponent implements OnInit {
  value: string = 'Clear me';

  setSelected(id: string) {
    this.store.dispatch(setSelectedIdAction({ selectedId: id }));
    this.store.dispatch(isSelectedAction({ isSelected: true }));
  }

  isSelected: boolean = true;
  selectedId: string = '';
clg(){
  console.log(this.todo)
}
  

  done: string[] = ['input', 'button', 'textarea', 'checkbox', 'select option'];

  data: ITem[] = [];
  todo: any[] = [];
  newData: any[] = []

  drop2(event: CdkDragDrop<any>) {
    moveItemInArray(this.newData, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<any>) {
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

      var titleDND = event.previousContainer.data[event.previousIndex];

      this.store.dispatch(
        addItemAction({
          id: uuidv4(),
          name: titleDND,
          width: '235px',
          height: '20px',
          placeholder: '',
          fontWeight: 'normal',
          fontSize: '13px',
          colorRGB: 'black',
          borderStyle: 'none',
          borderWidth: '1px',
          borderRadius: '',
        })
      );

      this.newData = this.data.map(item => item.id)

      
        console.log(this.newData)

    }
  }

  ngOnInit(): void {
    this.store.select(isSelectedSelector).subscribe((data) => {
      this.isSelected = data;
    });
    this.store.select(selectedIdSelector).subscribe((data) => {
      this.selectedId = data;
    });
    this.store.select(itemsSelector).subscribe((data) => {
      this.data = data;
    });
  }

  constructor(private store: Store) {}
}
