import {BaseSearch} from './base-search.model';

export interface IProductSearch extends BaseSearch{
  id?: number;
  name?: string;
  description?: string;
  startPrice?: number;
  endPrice?: number;

  code?: string;

  categoryId?: number;
  sizes?: [];
  colors?: [];
}
