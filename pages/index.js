import {
  getAllExperienceLevels,
  getAllJobs,
  getAllJobTypes,
} from "../datalayer";
import JobsPage from "../components/ui/JobsPage";
export default function Index({ jobs, jobTypes, experienceLevels }) {
  return (
    <JobsPage
      jobs={jobs}
      jobTypes={jobTypes}
      experienceLevels={experienceLevels}
    />
  );
}

export const getStaticProps = async (ctx) => {
  const jobs = await getAllJobs();
  const jobTypes = await getAllJobTypes();
  const experienceLevels = await getAllExperienceLevels();
  return {
    props: {
      jobs,
      jobTypes,
      experienceLevels,
    },
  };
};
