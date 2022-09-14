import Stack from "./client";

export const getAllCompanies = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "company",
    referenceFieldPath: undefined,
    jsonRtePath: undefined,
  });
  return response[0];
};
