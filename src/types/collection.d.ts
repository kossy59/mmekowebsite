export interface ContentItem {
  exclusiveid: string;
  name: string;
  id: string;
  exclusivelink: string;
  contenttype: "image" | "video";
}

export interface CrushItem {
  photolink: string;
  name: string;
  id: string;
  userid: string;
  hosttype: string;
  modelid: string;
  location: string;
  online: boolean;
}