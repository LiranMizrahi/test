import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component {
@Input() index = '0';
@Input() selectedIndex = '0';
@Input() component:any;



}
