import {ProdConfigMaterial} from './prod-config-material.interface';
import {ProdConfigData} from './prod-config-data.interface';

export interface AdjustableArea {
  selected: boolean;
  area_icon: string | null;
  area_id: number;
  area_name: string;
  area_price: number;
  area_price_id: number;
  is_optional: boolean;
  materials: ProdConfigMaterial[];
  product_asset: string;
  product_data: ProdConfigData[];
  visible_name: string;
}
