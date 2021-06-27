import { Component, OnInit } from '@angular/core';
import {ColorService} from "../shared/service/color.service";
import {SizeService} from "../shared/service/size.service";
import {CategoryService} from "../shared/service/category.service";
import {IColor} from "../shared/model/color.model";
import {ISize} from "../shared/model/size.model";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  colorList: IColor[] = [];
  sizeList: ISize[] = [];

  constructor(private colorService: ColorService,
              private sizeService: SizeService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.doColorList();
    this.doSizeList();

  }

  doColorList(): void{
    this.colorService.findAllColorUsingGET('response').subscribe( data => {
      this.colorList = data.body;
    }, error => {
      console.log(error);
    });
  }

  doSizeList(): void{
    this.sizeService.findAllSize().subscribe( data => {
      this.sizeList = data;
      console.log(this.sizeList);
    }, error => {
      console.log(error);
    });
  }

}
