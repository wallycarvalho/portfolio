import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout/layout';

interface Frontmatter {
  title: string;
  date: string;
  slug: string;
}

interface Node {
  id: string;
  excerpt: string;
  frontmatter: Frontmatter;
}

interface NodeProp {
  nodes: Node[];
}

interface BlogPageProps {
  allMdx: NodeProp;
}

export default function BlogPage({ data }: PageProps<BlogPageProps>): React.ReactNode {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data?.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>
              Date posted:
              {node.frontmatter.date}
            </p>
            <p>
              Path
              {node.frontmatter.slug}
            </p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
}

export const query = graphql`
query MyQuery {
    allMdx {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
      }
    }
  }`;
