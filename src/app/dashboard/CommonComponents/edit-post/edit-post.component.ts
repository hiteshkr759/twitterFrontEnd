import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from '../../model/twitter.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  editPost :  Post

  constructor(private readonly postService : PostService) { }

  ngOnInit() {

    this.listenEditPost();

  }

  listenEditPost(){
    this.postService.editSelectedPost.subscribe((post : Post) => {
      this.editPost = post;
    })
  }

}
