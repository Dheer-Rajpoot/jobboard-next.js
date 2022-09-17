import Stack from "./client";
import { companyContentTypeUid } from "./constants";

export const getAllCompaniesUrl = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: companyContentTypeUid,
    field: "url",
  });
  const urls = response[0].map((company) => {
    return company.url.substring(1); // removing leading / (slash) from url
  });
  return urls;
};

export const getCompany = async (entryUrl) => {
  const response = await Stack.getEntryByUrl({
    contentTypeUid: companyContentTypeUid,
    entryUrl,
  });
  return response[0];
};
