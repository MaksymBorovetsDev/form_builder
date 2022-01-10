import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { itemsSelector } from '../reducers/items';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();


  movies = [
    {id:'1', name: 'Episode I - The Phantom Menace'},
    {id:'1', name: 'Episode II - Attack of the Clones'},
    {id:'1', name: 'Episode III - Revenge of the Sith'},
    {id:'1', name: 'Episode V - The Empire Strikes Back'}
  ];
  clg(){
    console.log(this.data2)

  }
  data:any[] = []

  data2:any[] = [...this.data]

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  constructor(private store: Store) { }

  ngOnInit(): void {

    this.store
    .select(itemsSelector)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data) => {
      this.data = [...data];
    });

  }

}
