import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component {
@Input() index = '0';
@Input() selectedIndex = '0';
@Input() component:any;




}
