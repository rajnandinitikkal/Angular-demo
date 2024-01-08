import { Component, OnInit, Output,Input} from '@angular/core';
import { EventEmitter } from 'stream';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-first-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first-demo.component.html',
  styleUrl: './first-demo.component.css'
})
export class FirstDemoComponent implements OnInit {

// @Input() fromParent:string|undefined;
// childMessage:string="greeting from child to parent class"

// @Output() messageEvent=new EventEmitter<string>()
// @Output() message:string="greeting from child to parent class"
  constructor() { } 
  
  ngOnInit(): void {
 }
//   sendMessage():void{
//     this.messageEvent.emit("Hello sending data from child comonent")
//   }
// onKeyUp(){
//   alert("Hello")
// }

// onKeyUp(userName:string)
// {
//     console.log(userName)
//  }


}
