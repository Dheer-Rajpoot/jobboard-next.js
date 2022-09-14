import date from "date-and-time";

export const dateReducer = (dateStr) => {
  const dateObj = date.parse(dateStr.split("T")[0], "YYYY-MM-DD");
  return dateObj.toDateString();
};

export const jobReducer = (rawJob, parseRelatedJobs = true) => {
  let job = { ...rawJob };
  job.id = rawJob.uid;
  job.date_posted = dateReducer(rawJob.date_posted);

  const relatedJobs = rawJob.related_jobs;

  if (!parseRelatedJobs || !relatedJobs.length) {
    return job;
  } else {
    job.related_jobs = relatedJobs.map((relatedJob) => {
      return jobReducer(relatedJob, false);
    });
  }

  return job;
};
