import CompanyDetails from "../../components/data/details/CompanyDetails";
import {
  getAllCompaniesUrl,
  getAllJobsByCompany,
  getCompany,
} from "../../datalayer";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { useRouter } from "next/router";

function CompanyDetailsPage({ company, companyJobs }) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingSpinner loadingMessage="Company Data is loading" />;
  }
  return <CompanyDetails company={company} companyJobs={companyJobs} />;
}

export default CompanyDetailsPage;

export const getStaticPaths = async () => {
  const urls = await getAllCompaniesUrl();
  const paths = urls.map((url) => {
    return { params: { companyUrl: `${url}` } };
  });

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { companyUrl } = params;
  const company = await getCompany(`/${companyUrl}`);
  if (!company) {
    return {
      notFound: true,
    };
  }
  const companyJobs = await getAllJobsByCompany(company.uid);
  return {
    props: {
      company,
      companyJobs,
    },
    revalidate: 10,
  };
};
