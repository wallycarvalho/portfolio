import React, { FunctionComponent, ReactNode } from 'react';
import Layout from '../components/layout/layout';

// Step 2: Define your component
export default function AboutPage(): ReactNode {
  return (
    <main>
      <Layout pageTitle="About page">Header with info</Layout>
      <br />
      <h1>About Me 1</h1>
      <p>Hi there! I&aposm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  );
}

export const Head: FunctionComponent = function AboutPageHead(): ReactNode {
  return (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  );
};
