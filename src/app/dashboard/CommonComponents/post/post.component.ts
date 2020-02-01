import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/twitter.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post : Post;

  constructor(private readonly postService : PostService) { }

  ngOnInit() {
  }

  handleMessageAction(action:string){
    switch(action){
      case 'edit':
        //console.log('Edit the Message')
        this.postService.editPost(this.post);
        break;
      case 'cancel':
          console.log('cancel the Message')
          break;
      default:
        console.log('Default the Message')
        break;
    }
  }

}
