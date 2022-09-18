import JobDetails from "../../components/data/details/JobDetails";
import { getAllJobsUrl, getJob } from "../../datalayer";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useRouter } from "next/router";
function JobDetailsPage({ job }) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingSpinner loadingMessage="Job Data is loading" />;
  }
  return <JobDetails job={job} />;
}

export default JobDetailsPage;

export const getStaticPaths = async () => {
  const urls = await getAllJobsUrl();
  const paths = urls.map((url) => {
    return { params: { jobUrl: `${url}` } };
  });

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { jobUrl } = params;
  const job = await getJob(`/${jobUrl}`);
  if (!job) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      job,
    },
    revalidate: 10,
  };
};
