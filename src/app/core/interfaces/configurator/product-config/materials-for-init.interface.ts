import {MaterialsForUnity} from './materials-for-unity.interface';
import {DimensionsForUnity} from './dimensions-for-unity.interface';

export interface MaterialsForInit {
  configurator_product_type: number;
  init: MaterialsForUnity;
  dimensions: DimensionsForUnity[];
}
