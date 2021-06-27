import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './_layout/footer/footer.component';
import { HeaderComponent } from './_layout/header/header.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { NotFoundComponent } from './_layout/not-found/not-found.component';
import {WrapperComponent} from './_layout/swapper/wrapper.component';
import {RouterModule} from '@angular/router';
import {PaginatorModule} from './paginator/paginator.module';
import {SelectSingleModule} from './select-single/select-single.module';
import {ProductService} from './service/product.service';
import {CategoryService} from './service/category.service';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, NotFoundComponent, WrapperComponent],
  imports: [
    CommonModule,
    RouterModule,
    PaginatorModule,
    SelectSingleModule,
  ],
  providers: [ProductService, CategoryService]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {ngModule: SharedModule};
  }
}
