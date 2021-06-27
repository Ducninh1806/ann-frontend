import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './shared/_layout/swapper/wrapper.component';
import {HomeModule} from './home/home.module';
import {NotFoundComponent} from './shared/_layout/not-found/not-found.component';
import {ShopModule} from "./shop/shop.module";



const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => HomeModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('./shop/shop.module').then(m => ShopModule)
      }
    ],

  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
