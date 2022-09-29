import Stack from "./client";
import { homePageContentTypeUid } from "./constants";

export const getHomePage = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: homePageContentTypeUid,
  });

  return response[0];
};
