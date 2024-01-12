import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postList:Array<any>=[
    {id:1, 
    title:'post 1', 
    body:'this is post 1',
  },
  {
  id:2,
  title:'post 2',
  body:'this is post 2'
  }
];

  constructor() { }
    addPost(data: { id:number, title:string}){
    this.postList.push(data)}
  
}
