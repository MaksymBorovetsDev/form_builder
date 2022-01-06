import { Component, OnInit } from '@angular/core';
// portal >
import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
// < portal 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dgndrop';
  user:boolean = false
    //  PORTAL >
    readonly components = [DraganddropComponent];
    portal! : ComponentPortal<any> 
    // < portal

    ngOnInit(): void {
        
    // portal>
    this.portal = new ComponentPortal(this.components[0])
    // <portal
    }
  
}
