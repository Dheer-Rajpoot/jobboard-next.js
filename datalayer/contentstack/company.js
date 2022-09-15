import Stack from "./client";

export const getAllCompanies = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "company",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  });
  return response[0];
};

export const getAllCompaniesUrl = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "company",
    field: "url",
  });
  const urls = response[0].map((company) => {
    return company.url.substring(1); // removing leading / (slash) from url
  });
  return urls;
};

export const getCompany = async (entryUrl) => {
  const response = await Stack.getEntryByUrl({
    contentTypeUid: "company",
    entryUrl,
  });
  return response[0];
};
