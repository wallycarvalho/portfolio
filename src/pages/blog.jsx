import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map((item) => (
                        <li key={item.name}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
`;


export default BlogPage