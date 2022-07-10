import {AreaDataMatImage} from './area-data-mat-image.interface';

export interface AreaDataMatGroup {
  additional: any[];
  mat_images: AreaDataMatImage[];
  mat_other_name: string;
  mat_name: string;
  mat_category?: string;
  mat_brands?: string;
  material_id: number;
}
