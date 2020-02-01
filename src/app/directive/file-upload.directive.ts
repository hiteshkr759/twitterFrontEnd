import { Directive,EventEmitter,Output, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFileUpload]'
})

export class FileUploadDirective {

  @Output() filesDropped =  new EventEmitter<FileList>();
  @Output() filesHovered =  new EventEmitter<boolean>();

  constructor(el: ElementRef) {
    console.log('Directive is working');
    //el.nativeElement.style.backgroundColor = 'yellow';
   }

  @HostListener('drop', ['$event'])
    onDrop($event) {
      $event.preventDefault();
      console.log('Drop');
      let transfer = $event.dataTransfer;
      this.filesDropped.emit(transfer.files);
      this.filesHovered.emit(false);
    }

    @HostListener('dragover', ['$event'])
     onDragOver($event) {
       console.log('DragOver');
       event.preventDefault();
       this.filesHovered.emit(true);
     }

   @HostListener('dragleave', ['$event'])
    onDragLeave($event) {
      console.log('DragLeave');
      this.filesHovered.emit(false);
    }

}
