
import { ILink, ILinkFromWeb } from "./link";
import { ID3Node } from "./node";

export interface ITwigletFromWeb {
  links?: ILinkFromWeb[];
  nodes?: ID3Node[];
}

export interface ILinkMap {
  [key: string]: string[];
}

export interface ITwiglet {
  links: { [key: string]: ILink };
  nodes: { [key: string]: ID3Node };
  sourceMap: ILinkMap;
  targetMap: ILinkMap;
}
