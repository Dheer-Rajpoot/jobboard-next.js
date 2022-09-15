import date from "date-and-time";

export const dateReducer = (dateStr) => {
  const dateObj = date.parse(dateStr.split("T")[0], "YYYY-MM-DD");
  return dateObj.toDateString();
};

export const jobReducer = (job) => {
  job.date_posted = dateReducer(job.date_posted);
  return job;
};
