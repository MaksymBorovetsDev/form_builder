import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';




@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
  
})
export class InputComponentComponent implements OnInit {
  @Input() id: string = ''
  @Input() width: string = '160px'
  @Input() height: string = '20px'
  @Input() placeholder: string = ''
  @Input() fontWeight: string = 'normal'
  @Input() fontSize: string = '5px'
  @Input() colorRGB: string = 'black'
  @Input() borderStyle: string = 'none'
  @Input() borderWidth: string = '1px'
  @Input() borderRadius: string = '1px'




  constructor(private store : Store) {

  }

  ngOnInit(): void {


  }


}
