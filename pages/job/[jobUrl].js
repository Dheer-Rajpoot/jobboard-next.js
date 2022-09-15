import JobDetails from "../../components/data/details/JobDetails";
import { getAllJobsUrl, getJob } from "../../datalayer";

function JobDetailsPage({ job }) {
  return (
    <div>
      <JobDetails job={job} />
    </div>
  );
}

export default JobDetailsPage;

export const getStaticPaths = async () => {
  const urls = await getAllJobsUrl();
  const paths = urls.map((url) => {
    return { params: { jobUrl: `${url}` } };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { jobUrl } = params;
  const job = await getJob(`/${jobUrl}`);
  return {
    props: {
      job,
    },
  };
};
