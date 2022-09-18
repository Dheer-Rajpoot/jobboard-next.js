import Stack from "./client";
import { jobReducer } from "./utils";
import {
  jobJsonRtePath,
  jobReferenceFieldPath,
  jobContentTypeUid,
} from "./constants";

export const getAllJobs = async () => {
  const response = await Stack.getEntry({
    contentTypeUid: jobContentTypeUid,
    referenceFieldPath: jobReferenceFieldPath,
  });
  const rawJobs = response[0];
  const jobs = rawJobs.map((rawJob) => {
    return jobReducer(rawJob);
  });
  return jobs;
};

export const getAllJobsByCompany = async (uid) => {
  const response = await Stack.getJobsByCompany({
    contentTypeUid: jobContentTypeUid,
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
    contentTypeUid: jobContentTypeUid,
    field: "url",
  });
  const urls = response[0].map((job) => {
    return job.url.substring(1); // removing leading / (slash) from url
  });
  return urls;
};

export const getJob = async (entryUrl) => {
  const response = await Stack.getEntryByUrl({
    contentTypeUid: jobContentTypeUid,
    entryUrl,
    referenceFieldPath: jobReferenceFieldPath,
    jsonRtePath: jobJsonRtePath,
  });

  const job = jobReducer(response[0]);
  return job;
};

export const searchJobs = async (searchQuery) => {
  console.log("SEARCH QUERY PARAMS ARE", searchQuery);
  const response = await Stack.searchJobs({
    contentTypeUid: jobContentTypeUid,
    referenceFieldPath: jobReferenceFieldPath,
    searchBarText: searchQuery.searchBarText,
    remote: searchQuery.remote,
    feature_job: searchQuery.feature_job,
    minBaseAnnualSalary: searchQuery.minBaseAnnualSalary,
    maxBaseAnnualSalary: searchQuery.maxBaseAnnualSalary,
    job_type: searchQuery.job_type,
    experience_level: searchQuery.experience_level,
    job_skill: searchQuery.job_skill,
  });

  const rawJobs = response[0];
  const jobs = rawJobs.map((rawJob) => {
    return jobReducer(rawJob);
  });
  return jobs;
};
