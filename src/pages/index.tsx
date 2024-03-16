import React, { FunctionComponent, ReactNode } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/layout';

export default function IndexPage(): ReactNode {
  return (
    <Layout pageTitle="Homepage">
      I&#39;m here now
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>

  );
}

export const Head: FunctionComponent = function HomeHead() {
  return <title>Home Page</title>;
};
