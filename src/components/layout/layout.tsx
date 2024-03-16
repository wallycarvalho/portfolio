import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css';

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

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
    <div className="float: left">
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
