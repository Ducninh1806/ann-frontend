import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-single',
  templateUrl: './select-single.component.html',
  styleUrls: ['./select-single.component.scss']
})
export class SelectSingleComponent implements OnInit {
  @Input()
  title: any;

  @Input()
  items: any[];

  @Input()
  set selectedValue(value: any) {
    this.selectedValue1 = value;
    this.ngOnInit();
  }

  get selectedValue(): any {
    return this.selectedValue1;
  }

  selectedValue1: any;

  @Input()
  fieldValue: string;

  @Input()
  fieldName: string;

  @Output()
  returnSelectedValue = new EventEmitter();

  selectedItem: any = {};
  public selectControl = new FormControl();
  init = true;

  itemListTemp: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if (!(this.selectedValue1) || this.selectedValue1 === null) {
      this.selectControl.setValue('');
    } else {
      this.selectControl.setValue(this.selectedValue1);
    }
  }

  onSelectValue(): void {
    this.returnSelectedValue.emit(this.selectControl.value);
  }

  onChangeRemove(): void {
    this.returnSelectedValue.emit(null);
  }

}
