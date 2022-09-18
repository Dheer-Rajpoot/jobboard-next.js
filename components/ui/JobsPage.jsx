import { useState, useEffect, useRef } from "react";
import JobsList from "../data/lists/JobsList";
import SearchJobForm from "../forms/SearchJobsForm";
import SortJobsForm from "../forms/SortJobsForm";
import FilterJobsSidebarForm from "../forms/FilterJobsSidebarForm";
import { apiUrl } from "../../datalayer/contentstack/constants";

function JobsPage({ jobs, jobTypes, experienceLevels, jobSkills }) {
  const [sidebarFormState, setSidebarFormState] = useState({
    job_type: [],
    experience_level: [],
    job_skill: [],
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
      if (searchFormState.length >= 3 || searchFormState.length == 0) {
        const formsStates = { searchFormState, sidebarFormState };
        searchJobs(apiUrl, formsStates);
      }
    }
  }, [searchFormState]);

  let jobsCountMessage;
  switch (displayedJobs.length) {
    case 0: {
      jobsCountMessage = "No Jobs found.";
      break;
    }
    case 1: {
      jobsCountMessage = "One Job found.";
      break;
    }
    default: {
      jobsCountMessage = `Found ${displayedJobs.length} Jobs.`;
      break;
    }
  }

  const handleSkillDelete = (e, skillDelete) => {
    e.preventDefault();
    setSidebarFormState((prevState) => {
      return {
        ...prevState,
        job_skill: prevState.job_skill.filter((skill) => skillDelete != skill),
      };
    });
  };

  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
      <FilterJobsSidebarForm
        jobTypes={jobTypes}
        experienceLevels={experienceLevels}
        jobSkills={jobSkills}
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
        {/* Jobs header */}
        <div className="flex justify-between items-center mb-4">
          {/* Number of jobs found message  */}
          <div className="text-sm text-slate-500 italic">
            {jobsCountMessage}
          </div>
          {/* skills tags */}
          <div>
            <div className="flex flex-wrap items-center -m-1 max-w-2xl">
              {sidebarFormState.job_skill &&
                sidebarFormState.job_skill.map((skill) => (
                  <div className="m-1" key={skill.value}>
                    <p className="text-xs hover:scale-110  hover:bg-red-100 hover:text-red-600 inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
                      {skill.label}
                      <svg
                        className="h-2 w-2 ml-2 mt-1 text-sm hover:cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                        onClick={(e) => handleSkillDelete(e, skill)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M1 1l6 6m0-6L1 7"
                        />
                      </svg>
                    </p>
                  </div>
                ))}
            </div>
          </div>
          {/* Sort */}
          <SortJobsForm jobs={jobs} setDisplayedJobs={setDisplayedJobs} />
        </div>
        <JobsList jobs={displayedJobs} />
      </div>
    </div>
  );
}

export default JobsPage;
