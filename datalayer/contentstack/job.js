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

export const getAllJobsByCompany = async (uid) => {
  const response = await Stack.getJobsByCompany({
    contentTypeUid: "job",
    referenceFieldPath: jobReferenceFieldPath,
    uid,
  });
  const rawJobs = response[0];
  const jobs = rawJobs.map((rawJob) => {
    return jobReducer(rawJob);
  });
  return jobs;
};

export const getAllJobsUrl = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: "job",
    field: "url",
  });
  const urls = response[0].map((job) => {
    return job.url.substring(1); // removing leading / (slash) from url
  });
  return urls;
};

export const getJob = async (entryUrl) => {
  const response = await Stack.getEntryByUrl({
    contentTypeUid: "job",
    entryUrl,
    referenceFieldPath: jobReferenceFieldPath,
    jsonRtePath: jobJsonRtePath,
  });

  const job = jobReducer(response[0]);
  return job;
};
