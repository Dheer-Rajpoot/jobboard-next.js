import Stack from "./client";
import { jobSkillContentTypeUid } from "./constants";

export const getAllJobSkills = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: jobSkillContentTypeUid,
    field: ["uid", "title"],
  });

  return response[0];
};
