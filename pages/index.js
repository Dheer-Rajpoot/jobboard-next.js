import { getHomePage } from "../datalayer";
import RenderComponents from "../components/ui/RenderComponents";
function Index({ home }) {
  return (
    <>
      <RenderComponents pageComponents={home.page_components} />
    </>
  );
}

export default Index;

export const getStaticProps = async (ctx) => {
  const home = await getHomePage();

  return {
    props: {
      home: home[0],
    },
  };
};
