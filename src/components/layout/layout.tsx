import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
};

export default function Layout({ pageTitle, children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query {
      site {
        id
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <div>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
