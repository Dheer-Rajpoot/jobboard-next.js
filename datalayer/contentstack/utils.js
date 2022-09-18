import date from "date-and-time";

export const dateReducer = (dateStr) => {
  const dateObj = date.parse(dateStr.split("T")[0], "YYYY-MM-DD");
  return dateObj.toDateString();
};

export const jobReducer = (job) => {
  job.date_posted = dateReducer(job.date_posted);
  return job;
};

export const sortJobsByDatePosted = ({ jobs, ASC = true }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...jobs];
  sorted.sort(function (job1, job2) {
    const date1 = new Date(job1.date_posted);
    const date2 = new Date(job2.date_posted);
    if (date1 < date2) return ASC ? -1 : 1;
    else if (date1 > date2) return ASC ? 1 : -1;
    else return 0;
  });
  return sorted;
};

export const sortJobsByCompanyName = ({ jobs }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...jobs];
  sorted.sort(function (job1, job2) {
    if (job1.company[0].title < job2.company[0].title) return -1;
    else if (job1.company[0].title > job2.company[0].title) return 1;
    else return 0;
  });
  return sorted;
};

export const sortJobsByBaseAnnualSalary = ({ jobs, ASC = true }) => {
  // we don't want to modify the original list of jobs provided
  const sorted = [...jobs];
  sorted.sort(function (job1, job2) {
    if (job1.base_annual_salary < job2.base_annual_salary) return ASC ? -1 : 1;
    else if (job1.base_annual_salary > job2.base_annual_salary)
      return ASC ? 1 : -1;
    else return 0;
  });
  return sorted;
};
