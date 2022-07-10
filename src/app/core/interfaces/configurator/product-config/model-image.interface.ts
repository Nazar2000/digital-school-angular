export interface ModelImageInterface {
  image: string;
  sub_area_coordinates: SubAreaCoordinate[];
}

export interface SubAreaCoordinate {
  area_id: number;
  area_name: string;
  coord_x: number;
  coord_y: number;
  number_on_model: number;
}
