import { Component,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FirstDemoComponent} from '../component/first-demo/first-demo.component';
import { FormsModule } from '@angular/forms';
import { TwoWayDataComponent } from '../component/two-way-data/two-way-data.component';
import { NgComponent } from '../component/ng/ng.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FirstDemoComponent,FormsModule,TwoWayDataComponent,NgComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="Welcome to ExcelR Class";
//   parentMessage:string="Heartly welcome in our classes!!!"

  // message:string|undefined
//   messageFromParent:string|undefined
  // @ViewChild(FirstDemoComponent) childComp:any
  // ngAfterViewInit():void{
  //   this.message=this.childComp.childMessage
  //   console.log(this.message)
  // }
  
//   receiveMessage(receiveMessageFromParent:string):void{
// this.messageFromParent=receiveMessageFromParent
//   }
// messageFromChild:string|undefined
  
}
