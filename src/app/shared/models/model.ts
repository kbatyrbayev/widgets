export interface IRegion {
  [key: number]: IRegionInfoData[]
}

export interface IRegionInfo {
  id: number;
  avg: number;
  name: string;
  data: IRegionInfoData;
}

export interface IRegionInfoData {
  x: string[];
  y: number[];
}
