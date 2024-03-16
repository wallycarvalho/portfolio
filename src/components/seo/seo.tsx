import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  const data = useStaticQuery(graphql`
    query {
        site {
          id
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }`);

  return (
    <title>{title || data.site.siteMetadata.title}</title>
  );
}
