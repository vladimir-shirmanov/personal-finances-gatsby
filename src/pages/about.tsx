import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there, I'm proud creator of this site</p>
    </Layout>
  );
};

export const Head = () => <title>About me</title>;
export default AboutPage;
