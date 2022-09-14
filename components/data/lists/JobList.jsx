import JobCard from "../cards/JobCard";
function JobList({ jobs }) {
  console.log(jobs);
  return (
    <>
      {jobs.map((job) => {
        return (
          <div key={job.uid}>
            <JobCard job={job} />
          </div>
        );
      })}
    </>
  );
}

export default JobList;
