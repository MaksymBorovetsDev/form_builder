import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedIDSelector } from 'src/app/reducers/selectedComponent';

@Component({
  selector: 'app-changedetection',
  templateUrl: './changedetection.component.html',
  styleUrls: ['./changedetection.component.scss']
})
export class ChangedetectionComponent {

  
  public borderRadius: any = {
    name: 'Border Radius',
    size: 10
  };

  size = 10

  public reassign(): void {
    this.borderRadius = {
      name: this.borderRadius.name,
      size: this.borderRadius.size
    };
  }

}
