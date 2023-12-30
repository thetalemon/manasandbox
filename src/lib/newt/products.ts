import { newtClient, APP_UID } from "./general";
import type { NewtImage } from "./general";

export interface ProductItem {
  title: string;
  comment: string;
  github: string;
  url: string;
  image: NewtImage;
}

const MODEL_UID = "products";
const UIDS = {
  appUid: APP_UID,
  modelUid: MODEL_UID,
};

export const getProductItemList = async (): Promise<ProductItem[]> => {
  const { items: novels } = await newtClient.getContents<ProductItem>({
    ...UIDS,
    query: {
      select: ["title", "image", "comment", "github", "url"],
      order: ["-_sys.customOrder"],
    },
  });

  return novels;
};
