import Stack from "./client";
import { experienceLevelContentTypeUid } from "./constants";

export const getAllExperienceLevels = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: experienceLevelContentTypeUid,
    field: ["uid", "title"],
  });

  return response[0];
};
