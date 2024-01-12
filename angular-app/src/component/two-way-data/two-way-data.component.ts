import { NgClass,NgStyle } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data',
  standalone: true,
  imports: [FormsModule,NgClass,NgStyle],
  templateUrl: './two-way-data.component.html',
  styleUrl: './two-way-data.component.css'
})
export class TwoWayDataComponent implements OnInit{
  constructor() { } 
  twoWayData?:string;
  numberData?:string;
  ngOnInit(): void {
 }

 onKeyUp(){
  console.log(this.twoWayData)
}
onKey(){
  console.log(this.numberData)
}

isActive:boolean=true


}
