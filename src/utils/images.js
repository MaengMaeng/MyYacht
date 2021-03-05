import { IMAGES } from "@constants/images";

const getImage = (num, title) => {
  if (num != null) {
    return IMAGES["image" + num];
  } else {
    return IMAGES[title];
  }
};

export { getImage };
