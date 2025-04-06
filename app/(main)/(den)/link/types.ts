import { ColorId } from "../../../lib/colors";

export interface Link {
  id: string;
  url: string;
  title: string;
  memo: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  name: string;
  colorId: ColorId;
  linkCount: number;
}
