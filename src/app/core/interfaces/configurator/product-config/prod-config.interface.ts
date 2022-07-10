import {AdjustableArea} from './adjustable-area.interface';
import {ModelImageInterface} from './model-image.interface';
import {ProdDataOptionals} from './prod-data-optionals.interface';

export interface ProdConfig {
  adjustable_areas: AdjustableArea[];
  empty_scene: string;
  configurator_product_type: number;
  is_reconfiguration: boolean;
  model_images: ModelImageInterface[];
  name: string;
  optionals: ProdDataOptionals[];
  pk: number;
  producer_name: string;
  product_asset: string;
  product_currency: string;
  product_name: string;
  size_level: string;
  description: string;
}
