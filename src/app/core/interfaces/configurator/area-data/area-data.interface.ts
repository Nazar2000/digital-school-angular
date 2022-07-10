import {AreaDataMaterial} from './area-data-material.interface';
import {AreaDataSize} from './area-data-size.interface';

export interface AreaData {
  apply_disabled: boolean;
  area_id: number;
  area_price: number;
  area_price_id: number;
  materials: AreaDataMaterial[];
  product_asset: string;
  product_currency: string;
  product_pk: number;
  sizes: AreaDataSize[];
  palette?: any;
}
