export interface Position {
  x: number;
  y: number;
}

export interface Rectangle {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width: number;
  height: number;
}

export interface AreaInfo {
  rectangleId: string;
  pageNumber: number;
  rect: Rectangle;
  isDelete?: boolean;
}