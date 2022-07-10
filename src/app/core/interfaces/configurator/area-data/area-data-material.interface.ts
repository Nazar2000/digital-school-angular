import {AreaDataMatGroup} from './area-data-mat-group.interface';

export interface AreaDataMaterial {
  mat_area_id: number;
  mat_area_name: string;
  mat_area_visible_name: string;
  mat_image_id: number;
  material_groups: AreaDataMatGroup[];
  reset: boolean;
}
