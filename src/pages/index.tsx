import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Home page</title>;

export default IndexPage;
