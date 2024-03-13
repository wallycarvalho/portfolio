import * as React from "react"
import Layout from "../components/layout"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout pageTitle="Homepage">
        I'm here now
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </Layout>
    </>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>
export default IndexPage

