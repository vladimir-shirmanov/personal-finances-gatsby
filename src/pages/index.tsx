import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the tutorial.</p>
      <StaticImage alt="abstract bg" src="../images/abstract.jpg" />
    </Layout>
  );
};

export const Head = () => <title>Home page</title>;

export default IndexPage;
