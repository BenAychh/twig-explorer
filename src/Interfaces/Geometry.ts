export interface IPoint {
  x: number;
  y: number;
}

export interface IPolar {
  r: number;
  theta: number;
}

export interface ICircle {
  center: IPoint;
  depth?: number;
  id?: string;
  name?: string;
  radius: number;
}

export interface ILinearEquation {
  x: number;
  m: number;
  b: number;
}
