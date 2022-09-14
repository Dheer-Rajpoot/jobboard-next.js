import { getAllJobs } from "../datalayer/index";
import JobList from "../components/data/lists/JobList";
export default function Index({ jobs }) {
  return (
    <>
      <JobList jobs={jobs} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const jobs = await getAllJobs();
  return {
    props: {
      jobs,
    },
  };
};
