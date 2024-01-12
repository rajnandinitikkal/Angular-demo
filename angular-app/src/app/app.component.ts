import { Component,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstDemoComponent} from '../component/first-demo/first-demo.component';
import { FormsModule } from '@angular/forms';
import { TwoWayDataComponent } from '../component/two-way-data/two-way-data.component';
import { NgComponent } from '../component/ng/ng.component';
import { HelloComponent } from '../component/hello/hello.component';
import { RoutesComponent } from '../component/routes/routes.component';
import { Router,RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FirstDemoComponent,FormsModule,TwoWayDataComponent,NgComponent,HelloComponent ,RoutesComponent,RouterModule],
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
  
// constructor(private routes:Router){}
//   onClickRouterDemo(){
//     this.routes.navigate(["/Demo"])
//   }
//   onClickHello(){
//     this.routes.navigateByUrl("/hello");
//   }

// }
