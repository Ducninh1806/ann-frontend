import {RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop.component";
import {NgModule} from '@angular/core';


const  routes: Routes = [
  {
    path: '',
    component: ShopComponent
  }
];

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)

export class ShopRoutingModule {}
