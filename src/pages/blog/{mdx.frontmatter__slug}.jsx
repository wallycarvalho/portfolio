import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo/seo'

const BlogPost = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            <Link to={data.mdx.frontmatter.hero_image_credit_link}>
                Credit: {data.mdx.frontmatter.hero_image_credit_text}
            </Link>
            {children}
        </Layout>
    )
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

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost