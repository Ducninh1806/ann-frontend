import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSingleComponent } from './select-single.component';
import {NgxSelectModule} from "ngx-select-ex";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [SelectSingleComponent],
  imports: [
    CommonModule,
    NgxSelectModule,
    ReactiveFormsModule,
  ]
})
export class SelectSingleModule { }
