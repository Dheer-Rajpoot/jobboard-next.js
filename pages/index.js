import JobList from "../components/data/lists/JobList";
import { getAllJobs } from "../datalayer";
export default function Index({ jobs }) {
  return <JobList jobs={jobs} />;
}

export const getStaticProps = async (ctx) => {
  const jobs = await getAllJobs();
  return {
    props: {
      jobs,
    },
  };
};
