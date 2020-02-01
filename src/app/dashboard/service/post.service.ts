import { Injectable } from '@angular/core';
import { Post } from '../model/twitter.model';
import { Subject } from 'rxjs';

@Injectable()

export class PostService {

  editSelectedPost : Subject<Post> = new Subject();

  constructor() { }

  editPost(post : Post){
    this.editSelectedPost.next(post);
  }

  

}
