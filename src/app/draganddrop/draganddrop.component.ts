import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { ISelectedConfigs, selectedIDSelector, setSelectedConfigAction } from '../reducers/selectedComponent';
import { addItemAction, ITem, itemsSelector } from '../reducers/items';

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
  selectedWidthValue = '';
  selectedId: string = '';
  selectedComponentConfig :ISelectedConfigs[] = []

  dispatchSelectedCompoent(id: string, width: string, height: string, placeholder: string) {
    this.store.dispatch(
      setSelectedConfigAction({
        selectedId: id,
        selectedWidth: width,
        selectedHeight: height,
        selectedPlaceholder : placeholder
      })
    );
  }
  clg(){
    console.log(this.selectedId)
  }



  done: string[] = ['input', 'button', 'textarea', 'checkbox', 'select option'];

  data: ITem[] = [];
  todo: any[] = [];

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
          width: '205px',
          height: '40px',
          placeholder: '',
          fontWeight: 'normal',
          fontSize: '13px',
          colorRGB: 'black',
          borderStyle: 'none',
          borderWidth: '1px',
          borderRadius: '',
        })
      );


    }
  }

  ngOnInit(): void {

    this.store.select(itemsSelector).subscribe((data) => {
      this.data = data;
    });

    this.store.select(selectedIDSelector).subscribe((data) => {
      this.selectedId = data;
    });


  }

  constructor(private store: Store) {}
}





