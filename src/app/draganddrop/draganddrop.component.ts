import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray
} from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import {
  ISelectedConfigs,
  selectedIDSelector,
  setSelectedConfigAction,
} from '../reducers/selectedComponent';
import { addItemAction, ITem, itemsSelector } from '../reducers/items';
import { ISelectedComponentStyles } from './draganddrop.interface';
import { Subject, takeUntil } from 'rxjs';
import { Unsubscribe } from '../shared/base.unsubscribe.component';

export interface DragAndDropData {
  name: string;
  id?: string;
}

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.scss'],
})
export class DraganddropComponent extends Unsubscribe implements  OnInit {
  selectedId: string = '';


  dispatchSelectedCompoent(item: ISelectedComponentStyles) {
    this.store.dispatch(
      setSelectedConfigAction({
        selectedId: item.id,
        selectedWidth: item.width,
        selectedHeight: item.height,
        selectedPlaceholder: item.placeholder,
        fontSize: item.fontSize,
        colorRGB: item.colorRGB,
        borderWidth: item.borderWidth,
        borderRadius: item.borderRadius,
        borderStyle: item.borderStyle,
      })
    );
  }

  typeList: string[] = ['input', 'button', 'textarea', 'checkbox', 'select option'];
  todo: string[] = [];

  componentsList: ITem[] = [];


  drop2(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.componentsList, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<any[]>) {
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
          borderWidth: '',
          borderRadius: '',
        })
      );
    }
  }

  constructor(private store: Store) {
    super()
  }

  ngOnInit(): void {
    this.store
      .select(itemsSelector)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.componentsList = [...data];
      });

    this.store
      .select(selectedIDSelector)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.selectedId = data;
      });
  }

}
