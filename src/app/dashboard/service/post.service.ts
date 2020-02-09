import { Injectable } from '@angular/core';
import { Post } from '../model/twitter.model';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Injectable()

export class PostService {

  editSelectedPost : Subject<Post> = new Subject();

  constructor(private readonly api: ApiService) { }

  editPost(post : Post){
    this.editSelectedPost.next(post);
  }

  directPost(params){
    const path : string  = `api/v1/twitter/tweet/post`;
    return this.api.postDataWithMedia(params,path);
    //console.log('Direct Post');
  }

  schedulePost(){
    console.log('Schedeule Post');
  }
  

}
