export interface IRegion {
  [key: number]: IRegionInfo;
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
