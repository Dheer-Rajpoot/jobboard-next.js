import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import SkillsFilterForm from "./SkillsFilterForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FilterJobsSidebarForm({
  sideBarFormState,
  setSideBarFormState,
  setDisplayedJobs,
  jobTypes,
  experienceLevels,
  jobSkills,
}) {
  const jobTypesOptions = jobTypes.map((jobType) => {
    return { value: `${jobType.uid}`, display: `${jobType.title}` };
  });

  const experienceLevelsOptions = experienceLevels.map((experienceLevel) => {
    return {
      value: `${experienceLevel.uid}`,
      display: `${experienceLevel.title}`,
    };
  });

  const baseSalaryRangesOptions = [
    { value: "<20K", display: "< £20K", bounds: { min: 0, max: 20000 } },
    {
      value: "20K-50K",
      display: "£20K - £50K",
      bounds: { min: 20001, max: 50000 },
    },
    {
      value: "50K-100K",
      display: "£50K - £100K",
      bounds: { min: 50001, max: 100000 },
    },
    {
      value: "> 100K",
      display: "> £100K",
      bounds: { min: 100001, max: 1000000 },
    },
  ];

  const handleRemoteOkChange = (checked) => {
    //TODO: send request and filter jobs

    setSideBarFormState((prevState) => {
      return { ...prevState, remote: !prevState.remote };
    });
  };

  const handleFeaturedJobsOnlyChange = (checked) => {
    //TODO: send request and filter jobs
    setSideBarFormState((prevState) => {
      return { ...prevState, feature_job: !prevState.feature_job };
    });
  };

  const handleJobTypeSelect = (e, option) => {
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const job_type = [...prevState.job_type];
        job_type.push(option);
        return { ...prevState, job_type: job_type };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          job_type: prevState.job_type.filter((jobType) => option != jobType),
        };
      });
    }
  };

  const handleExperienceLevelsSelect = (e, option) => {
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const experience_level = [...prevState.experience_level];
        experience_level.push(option);
        return { ...prevState, experience_level: experience_level };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          experience_level: prevState.experience_level.filter(
            (experienceLevel) => option != experienceLevel
          ),
        };
      });
    }
  };

  const handleBaseSalaryRangesSelect = (e, option, bounds) => {
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const baseSalaryOptions = [...prevState.baseSalaryOptions];
        baseSalaryOptions.push(option);

        const baseSalaryBounds = [...prevState.baseSalaryBounds];
        baseSalaryBounds.push(bounds.min);
        baseSalaryBounds.push(bounds.max);

        const newFormState = {
          ...prevState,
          baseSalaryOptions,
          baseSalaryBounds,
        };

        return newFormState;
      });
    } else {
      setSideBarFormState((prevState) => {
        const newFormState = {
          ...prevState,
          baseSalaryOptions: prevState.baseSalaryOptions.filter(
            (baseSalaryOption) => option != baseSalaryOption
          ),
          baseSalaryBounds: prevState.baseSalaryBounds.filter(
            (bound) => ![bounds.min, bounds.max].includes(bound)
          ),
        };

        return newFormState;
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* White box */}
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
          {/* Group 0*/}
          <SkillsFilterForm
            jobSkills={jobSkills}
            selectedSkills={sideBarFormState.job_skill}
            setSideBarFormState={setSideBarFormState}
          />

          {/* Group 1 */}
          <Switch.Group as="div" className="flex items-center">
            <Switch
              checked={sideBarFormState.remote}
              onChange={handleRemoteOkChange}
              className={classNames(
                sideBarFormState.remote ? "bg-indigo-600" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  sideBarFormState.remote ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="text-sm font-medium text-gray-900">
                Remote Ok
              </span>
            </Switch.Label>
          </Switch.Group>

          {/* Group 2 */}
          <Switch.Group as="div" className="flex items-center">
            <Switch
              checked={sideBarFormState.feature_job}
              onChange={handleFeaturedJobsOnlyChange}
              className={classNames(
                sideBarFormState.feature_job ? "bg-indigo-600" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  sideBarFormState.feature_job
                    ? "translate-x-5"
                    : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="text-sm font-medium text-gray-900">
                Featured Jobs Only
              </span>
            </Switch.Label>
          </Switch.Group>

          {/* Group 3 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">
              Job Types
            </div>
            <ul className="space-y-2">
              {jobTypesOptions.map((option) => {
                return (
                  <li key={option.value}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        onChange={(e) => handleJobTypeSelect(e, option.value)}
                        checked={sideBarFormState.job_type.includes(
                          option.value
                        )}
                      />
                      <span className="text-sm text-slate-600 font-medium ml-2">
                        {option.display}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Group 4 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">
              Experience Level
            </div>
            <ul className="space-y-2">
              {experienceLevelsOptions.map((option) => {
                return (
                  <li key={option.value}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        onChange={(e) =>
                          handleExperienceLevelsSelect(e, option.value)
                        }
                        checked={sideBarFormState.experience_level.includes(
                          option.value
                        )}
                      />
                      <span className="text-sm text-slate-600 font-medium ml-2">
                        {option.display}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Group 5 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">
              Salary Range
            </div>
            <ul className="space-y-2">
              {baseSalaryRangesOptions.map((option) => {
                return (
                  <li key={option.value}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        onChange={(e) =>
                          handleBaseSalaryRangesSelect(
                            e,
                            option.value,
                            option.bounds
                          )
                        }
                        checked={sideBarFormState.baseSalaryOptions.includes(
                          option.value
                        )}
                      />
                      <span className="text-sm text-slate-600 font-medium ml-2">
                        {option.display}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Alert */}
      <div className="relative bg-indigo-200 rounded-sm p-5 min-w-60">
        <div className="absolute bottom-0 -mb-3">
          <svg
            width="44"
            height="42"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ill-b">
                <stop stopColor="#A5B4FC" offset="0%" />
                <stop stopColor="#818CF8" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="50%"
                y1="24.537%"
                x2="50%"
                y2="100%"
                id="ill-c"
              >
                <stop stopColor="#4338CA" offset="0%" />
                <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
              </linearGradient>
              <path id="ill-a" d="m20 0 20 40-20-6.25L0 40z" />
            </defs>
            <g
              transform="scale(-1 1) rotate(-51 -11.267 67.017)"
              fill="none"
              fillRule="evenodd"
            >
              <mask id="ill-d" fill="#fff">
                <use xlinkHref="#ill-a" />
              </mask>
              <use fill="url(#ill-b)" xlinkHref="#ill-a" />
              <path
                fill="url(#ill-c)"
                mask="url(#ill-d)"
                d="M20.586-7.913h25v47.5h-25z"
              />
            </g>
          </svg>
        </div>
        <div className="relative">
          <div className="text-sm font-medium text-slate-800 mb-2">
            Remember to keep track of your job research.
          </div>
          <div className="text-right">
            <a
              className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
              href="#0"
            >
              Create Alert -&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterJobsSidebarForm;