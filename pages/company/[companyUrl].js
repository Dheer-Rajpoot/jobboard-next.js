import CompanyDetails from "../../components/data/details/CompanyDetails";
import { getAllCompaniesUrl, getCompany } from "../../datalayer";

function CompanyDetailsPage({ company }) {
  return <CompanyDetails company={company} />;
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
  return {
    props: {
      company,
    },
  };
};
