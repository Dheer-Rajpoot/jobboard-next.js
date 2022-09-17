import JobCard from "../cards/JobCard";
function JobsList({ jobs }) {
  return (
    <div>
      {jobs.map((job) => {
        return <JobCard job={job} key={job.uid} />;
      })}
    </div>
  );
}

export default JobsList;
