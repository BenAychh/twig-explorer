import { IAttribute } from "./attribute";
import { ID3Node } from "./node";

export interface IBasicLink {
  id: string;
}

export interface ILinkFromWeb extends IBasicLink {
  source: string;
  target: string;
}

export interface ILink extends IBasicLink {
  source: ID3Node;
  target: ID3Node;
}
