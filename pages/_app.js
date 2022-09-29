import "../styles/globals.css";
import Layout from "../components/globals/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const { home } = pageProps;
  const metaData = (seo) => {
    const metaArr = [];
    for (const key in seo) {
      if (seo.enable_search_indexing) {
        metaArr.push(
          <meta
            name={
              key.includes("meta_")
                ? key.split("meta_")[1].toString()
                : key.toString()
            }
            content={seo[key].toString()}
            key={key}
          />
        );
      }
    }
    return metaArr;
  };
  return (
    <>
      <Head>
        <meta name="application-name" content="Job Board App" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1"
        />
        <title>Job Board Next.js Contentstack</title>
        {home?.seo && home.seo.enable_search_indexing && metaData(home.seo)}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
