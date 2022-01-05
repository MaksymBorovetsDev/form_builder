import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})
export class ButtonComponentComponent implements OnInit {

  @Input() width: string = '160px'
  @Input() height: string = '50px'
  @Input() placeholder: string = ''
  @Input() fontWeight: string = 'normal'
  @Input() fontSize: string = '5px'
  @Input() colorRGB: string = 'black'
  @Input() borderStyle: string = 'none'
  @Input() borderWidth: string = '1px'
  @Input() borderRadius: string = '1px'

  constructor() { }

  ngOnInit(): void {
  }

}
