import {ICategory} from './category.model';
import {ISize} from './size.model';
import {IColor} from './color.model';
import {BaseSearch} from './search/base-search.model';

export interface IProduct extends BaseSearch{
  id?: number;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  category?: ICategory;
  sizes?: ISize[];
  colors?: IColor[];
}
