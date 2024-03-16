import React, { FunctionComponent, ReactNode } from 'react';
import {
  graphql, HeadProps, Link, PageProps,
} from 'gatsby';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';

type Frontmatter = {
  title: string;
  date: string;
  slug: string;
  hero_image: ImageDataLike;
  hero_image_alt: string;
  hero_image_credit_link: string;
  hero_image_credit_text: string;
};

type Node = {
  id: string;
  excerpt: string;
  frontmatter: Frontmatter;
};

type BlogPostProps = {
  mdx: Node;
};

export default function BlogPost({ data, children }: PageProps<BlogPostProps>): ReactNode {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>
        Posted:
        {data.mdx.frontmatter.date}
      </p>
      {typeof image !== 'undefined' && (
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      )}
      <Link to={data.mdx.frontmatter.hero_image_credit_link}>
        Credit:
        {' '}
        {data.mdx.frontmatter.hero_image_credit_text}
      </Link>
      {children}
    </Layout>
  );
}

export const query = graphql`
query MyQuery($frontmatter__slug: String = "") {
    mdx(frontmatter: {slug: {eq: $frontmatter__slug}}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
            childImageSharp {
                gatsbyImageData
            }
        }
      }
    }
  }
`;

export const Head: FunctionComponent<HeadProps<BlogPostProps>> = function BlogPostHead(
  { data }: HeadProps<BlogPostProps>,
) {
  return <title>{data.mdx.frontmatter.title}</title>;
};
