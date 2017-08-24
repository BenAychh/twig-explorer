import { clone, merge } from "ramda";
import { ID3Node, ILink, ILinkFromWeb, ILinkMap, ITwiglet, ITwigletFromWeb } from "./Interfaces/index";

export function getTransformedTwiglet(webTwiglet: ITwigletFromWeb): ITwiglet {
  const allNodesObject: { [key: string]: ID3Node } = {};
  // Add and sync existing nodes.
  webTwiglet.nodes.forEach((node) => {
    allNodesObject[node.id] = node;
  });

  // Clear our allLinksObject because we have new Links.
  const allLinksObject: { [key: string]: ILink } = {};
  const linkSourceMap: ILinkMap = {};
  const linkTargetMap: ILinkMap = {};

  webTwiglet.links.forEach((link: ILinkFromWeb) => {
    const newLink: ILink = {
      id: link.id,
      source: allNodesObject[link.source],
      target: allNodesObject[link.target],
    };
    allLinksObject[link.id] = newLink;

    if (newLink.source && newLink.target) {
      if (!linkSourceMap[newLink.source.id]) {
        linkSourceMap[newLink.source.id] = [newLink.id];
      } else {
        linkSourceMap[newLink.source.id].push(newLink.id);
      }

      if (!linkTargetMap[newLink.target.id]) {
        linkTargetMap[newLink.target.id] = [newLink.id];
      } else {
        linkTargetMap[newLink.target.id].push(newLink.id);
      }
    }
    return newLink;
  });

  const twiglet: ITwiglet = {
    links: allLinksObject,
    nodes: allNodesObject,
    sourceMap: linkSourceMap,
    targetMap: linkTargetMap,
  };
  setDepths(twiglet);
  return twiglet;
}

function setDepths(twiglet: ITwiglet) {
  let currentLayer = Reflect.ownKeys(twiglet.nodes)
                          .filter((node) => twiglet.sourceMap[node] && !twiglet.targetMap[node])
                          .map((nodeId) => twiglet.nodes[nodeId]);
  let nextLayer: ID3Node[] = [];
  let layer = 0;
  while (currentLayer.length) {
    const node = currentLayer.shift();
    if (node && !node.depth) {
      node.depth = layer;
      (twiglet.sourceMap[node.id] || [])
      .forEach((linkId) => {
        const target = twiglet.links[linkId].target;
        nextLayer.push(target);
      });
    }
    if (currentLayer.length === 0 && nextLayer.length > 0) {
      layer += 1;
      currentLayer = nextLayer.map((n) => n);
      nextLayer = [];
    }
  }
}
