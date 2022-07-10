export interface AreaDataSize {
  dimension: string;
  pro_data_name: string;
  prod_data_id: number;
  reset: boolean;
  values: [{
    default: boolean;
    disabled: boolean;
    value: number;
  }];
}
