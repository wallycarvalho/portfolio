import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo/seo'

const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <p>{data.mdx.frontmatter.date}</p>
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
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost