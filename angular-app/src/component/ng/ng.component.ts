import { Component,OnInit  } from '@angular/core';
import { NgFor,NgIf , NgStyle,NgSwitch} from '@angular/common';

@Component({
  selector: 'app-ng',
  standalone: true,
  imports: [ NgFor,NgIf,NgStyle,NgSwitch],
  templateUrl: './ng.component.html',
  styleUrl: './ng.component.css'
})
export class NgComponent implements OnInit {
  constructor() { } 
  
  ngOnInit(): void {
 }
 namesArray:Array<string>=['Yellow','White','Black','blue','pink','red']

number = 10;

isEven() {
  return this.number % 2 === 0;
}

isOdd() {
  return !this.isEven();
}



}
