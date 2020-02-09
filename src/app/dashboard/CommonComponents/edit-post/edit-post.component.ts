import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Post } from '../../model/twitter.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit,OnDestroy {

  editPost :  Post;
  editingPost : boolean = false;
  postForm : FormGroup;
  uploadedFiles : FileList;

  isScheduled:boolean = false;


  editSelectedPostSubscrption : Subscription;


  constructor(private readonly postService : PostService) { }

  ngOnInit() {
    this.listenForEditPost();
    this.inilizeForm();
  }

  ngOnDestroy(){
    this.editSelectedPostSubscrption.unsubscribe();
  }

  inilizeForm(){
    this.postForm = new FormGroup({
      id : new FormControl('-1',[Validators.required]),
      status : new FormControl('',[Validators.required]),
      postDate : new FormControl('',[]),
      postTime : new FormControl('',[])
    });
  }

  patchFormData(formData){
    this.postForm.patchValue(formData);
  }

  listenForEditPost(){
    this.editSelectedPostSubscrption =  this.postService.editSelectedPost.subscribe((post : Post) => {
      this.editPost = post;
      this.patchFormData(post);
    })
  }

  onPostSubmit(){
    console.log('Raw Form Data is submiiting',this.postForm.value);
    const postData : Post = {
      id : this.postForm.get('id').value,
      status : this.postForm.get('status').value,
    }
    if(this.uploadedFiles && this.uploadedFiles.length > 0 ){
      postData.media = true;
      console.log('Upload',this.uploadedFiles);
      postData.mediaFile = this.uploadedFiles;
    }
    console.log('postData',postData);
   // return null;
    this.postService.directPost(postData).subscribe(response =>{
      console.log('Response',response);
    });
    console.log('Process Form Data is submiiting',postData);
  }

  handleSchedule(){
    this.isScheduled = this.isScheduled ? false : true ;
  }



  handleFileUpload(fileList : FileList){
    this.uploadedFiles = fileList;
   // console.log('File List',fileList);
    //this.uploadedFiles = [...fileList] ;
  }


}