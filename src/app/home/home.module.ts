import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import {PaginatorModule} from "../shared/paginator/paginator.module";



@NgModule({
  declarations: [HomeComponent, ProductOverviewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PaginatorModule,
  ]
})
export class HomeModule { }
