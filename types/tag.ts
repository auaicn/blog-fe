import { ColorId } from "../app/lib/colors";

export interface Tag {
  id: string;
  name: string;
  colorId: ColorId;
  linkCount: number;
}
