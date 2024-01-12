import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
posts:Array<any>=[]

constructor(private PostsService:PostsService){
  this.posts=PostsService.postList;
}
addNewPost(){
  let newPost ={
    id:3, title:"post 3"
  }
  this.PostsService.addPost(newPost)
}

}
