import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { FileUploadDirective } from '../directive/file-upload.directive';

const importExport = [
  FormsModule,
  ReactiveFormsModule,
  DlDateTimeDateModule,  // <--- Determines the data type of the model
  DlDateTimePickerModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [
    FileUploadDirective
  ],
  imports: [
    CommonModule,
    ...importExport
  ],
  exports:[
   ...importExport,
   FileUploadDirective
  ]
})
export class SharedModule { }
