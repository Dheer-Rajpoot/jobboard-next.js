import Stack from "./client";
import { jobReducer } from "./utils";
import { jobJsonRtePath, jobReferenceFieldPath } from "./constants";

export const getAllJobs = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "job",
    referenceFieldPath: jobReferenceFieldPath,
    jsonRtePath: jobJsonRtePath,
  });
  const rawJobs = response[0];
  const jobs = rawJobs.map((rawJob) => {
    return jobReducer(rawJob);
  });
  return jobs;
};
