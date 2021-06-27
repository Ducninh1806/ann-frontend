import {Order} from './order.model';

export interface BaseSearch {
  totalRecords?: number;
  totalPages?: number;
  page?: number;
  pageSize?: number;
  orders?: Order[];
  data?: any[];
}
