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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { FileUploadDirective } from '../directive/file-upload.directive';
import { ChartsModule } from 'ng2-charts';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from '../service/api.service';
const importExport = [
  ChartsModule,
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
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule
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
  ],
  providers:[MatDatepickerModule,ApiService]
})
export class SharedModule { }
