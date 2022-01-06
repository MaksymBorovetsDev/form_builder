import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
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
// portal >
import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
// < portal 





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
          borderWidth: '',
          borderRadius: '',
        })
      );
    }
  }
  //  PORTAL >

  readonly components = [ChildOneComponent, ChildTwoComponent, ChildThreeComponent];
  
  section1! : ComponentPortal<any> 

  // < portal

  ngOnInit(): void {
    this.store.select(itemsSelector).subscribe((data) => {
      this.data = data;
    });

    this.store.select(selectedIDSelector).subscribe((data) => {
      this.selectedId = data;
    });


    // portal>
    this.section1 = new ComponentPortal(this.components[0])
 // <portal
  }

  constructor(private store: Store) {}
}


// portal >
@Component({
  selector: 'app-child-one',
  template: `<p>I am child one.</p>`
})
export class ChildOneComponent  {
}

@Component({
  selector: 'app-child-two',
  template: `<p>I am child two.</p>`
})
export class ChildTwoComponent  {
}

@Component({
  selector: 'app-child-two',
  template: `<p>I am child three.</p>`
})
export class ChildThreeComponent  {
}

// < portal