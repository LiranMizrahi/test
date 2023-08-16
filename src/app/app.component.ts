import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { Tab1Component } from "./tab1/tab1.component";
import { Tab2Component } from "./tab2/tab2.component";
import { TitleComponent } from './title/title.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, MatTabsModule, Tab1Component, Tab2Component]
})
export class AppComponent {
  selectedIndex = 3;
  tabs = [
    {label:"tab1",component:Tab1Component,index:1,selectedIndex:this.selectedIndex},
    {label:"tab2",component:Tab1Component,index:2,selectedIndex:this.selectedIndex},
    {label:"tab3",component:Tab1Component,index:3,selectedIndex:this.selectedIndex},
    {label:"tab4",component:Tab1Component,index:4,selectedIndex:this.selectedIndex},
    {label:"tab5",component:Tab2Component,index:5,selectedIndex:this.selectedIndex}]
  
    myInput = {'index':this.selectedIndex,'selectedIndex': this.selectedIndex,component:TitleComponent}
    title = 'test';

    onTabChange(event:any){
      this.selectedIndex = event.index
      this.tabs.map((tab => tab.selectedIndex=this.selectedIndex))
      // this.myInput.selectedIndex =event.index// = {'index':this.selectedIndex}
    }

  
}
