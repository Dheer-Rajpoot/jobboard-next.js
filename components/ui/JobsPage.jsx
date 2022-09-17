import { useState, useEffect, useRef } from "react";
import JobsList from "../data/lists/JobsList";
import SearchJobForm from "../forms/SearchJobsForm";
import SortJobsForm from "../forms/SortJobsForm";
import FilterJobsSidebarForm from "../forms/FilterJobsSidebarForm";
import { apiUrl } from "../../datalayer/contentstack/constants";

function JobsPage({ jobs, jobTypes, experienceLevels }) {
  console.log("JOBS ARE", jobs);

  let jobsCountMessage;
  switch (jobs.length) {
    case 0: {
      jobsCountMessage = "No Jobs found.";
      break;
    }
    case 1: {
      jobsCountMessage = "One Job found.";
      break;
    }
    default: {
      jobsCountMessage = `Found ${jobs.length} Jobs.`;
      break;
    }
  }

  const [sidebarFormState, setSidebarFormState] = useState({
    job_type: [],
    experience_level: [],
    remote: false,
    featured_job: false,
    baseSalaryOptions: [],
    baseSalaryBounds: [],
  });

  const [searchFormState, setSearchFormState] = useState("");

  const [displayedJobs, setDisplayedJobs] = useState(jobs);

  const searchJobs = async (apiUrl, formsStates) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formsStates),
    });
    const foundJobs = await response.json();
    setDisplayedJobs(foundJobs);
  };

  const initialSidebarFormRender = useRef(true);
  useEffect(() => {
    if (initialSidebarFormRender.current) {
      initialSidebarFormRender.current = false;
    } else {
      const formsStates = { searchFormState, sidebarFormState };
      searchJobs(apiUrl, formsStates);
    }
  }, [sidebarFormState]);

  const initialSearchFormRender = useRef(true);
  useEffect(() => {
    if (initialSearchFormRender.current) {
      initialSearchFormRender.current = false;
    } else {
      console.log("Search form state is changed");
    }
  }, [searchFormState]);

  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
      <FilterJobsSidebarForm
        jobTypes={jobTypes}
        experienceLevels={experienceLevels}
        sideBarFormState={sidebarFormState}
        setSideBarFormState={setSidebarFormState}
        setDisplayedJobs={setDisplayedJobs}
      />
      <div className="w-full">
        <SearchJobForm
          searchFormState={searchFormState}
          setSearchFormState={setSearchFormState}
          setDisplayedJobs={setDisplayedJobs}
        />
        {jobsCountMessage}
        <SortJobsForm jobs={jobs} setDisplayedJobs={setDisplayedJobs} />
        <JobsList jobs={displayedJobs} />
      </div>
    </div>
  );
}

export default JobsPage;
