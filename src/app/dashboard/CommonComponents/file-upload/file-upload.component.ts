import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileUpload',{static: false}) fileUpload : ElementRef; 
  @Output() onFileUpload : EventEmitter<FileList> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  //currentUpload: Upload;
  dropzoneActive:boolean = false;

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(fileList: FileList) {
    console.log('dropFile',fileList)
    this.onFileUpload.emit(fileList);
  }

  uploadFile(){
    const fileList:FileList = this.fileUpload.nativeElement.files;
    console.log('uploadFile',fileList)
    this.onFileUpload.emit(fileList);
    //console.log('fileList',this.fileUpload.nativeElement.file);
  }

}
