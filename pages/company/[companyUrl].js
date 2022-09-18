import CompanyDetails from "../../components/data/details/CompanyDetails";
import {
  getAllCompaniesUrl,
  getAllJobsByCompany,
  getCompany,
} from "../../datalayer";

function CompanyDetailsPage({ company, companyJobs }) {
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
    fallback: false,
  };
};
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const { companyUrl } = params;
  const company = await getCompany(`/${companyUrl}`);
  const companyJobs = await getAllJobsByCompany(company.uid);
  return {
    props: {
      company,
      companyJobs,
    },
    revalidate: 10,
  };
};
