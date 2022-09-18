import {
  getAllExperienceLevels,
  getAllJobs,
  getAllJobSkills,
  getAllJobTypes,
} from "../datalayer";
import JobsPage from "../components/ui/JobsPage";
export default function Index({ jobs, jobTypes, experienceLevels, jobSkills }) {
  return (
    <JobsPage
      jobs={jobs}
      jobTypes={jobTypes}
      experienceLevels={experienceLevels}
      jobSkills={jobSkills}
    />
  );
}

export const getStaticProps = async (ctx) => {
  const jobs = await getAllJobs();
  const jobTypes = await getAllJobTypes();
  const experienceLevels = await getAllExperienceLevels();
  const jobSkills = await getAllJobSkills();
  return {
    props: {
      jobs,
      jobTypes,
      experienceLevels,
      jobSkills,
    },
    revalidate: 10,
  };
};
