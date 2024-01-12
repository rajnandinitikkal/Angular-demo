import { Component, } from '@angular/core';
import { NgFor } from '@angular/common';
import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent {
post:Array<any>=[]
constructor(private PostsService:PostsService){
  this.post=PostsService.postList;
}
}
