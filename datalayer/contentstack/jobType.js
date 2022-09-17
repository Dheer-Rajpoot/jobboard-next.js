import Stack from "./client";
import { jobTypeContentTypeUid } from "./constants";

export const getAllJobTypes = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: jobTypeContentTypeUid,
    field: ["uid", "title"],
  });

  return response[0];
};
