// Step 1: Import React
import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout/layout'

// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Layout pageTitle="About page">Header with info</Layout>
            <br />
            <h1>About Me 1</h1>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

export const Head: HeadFC = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="Your description" />
    </>
)

// Step 3: Export your component
export default AboutPage