import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(query)

  return (
    <div className="logo">
      <Link to="/">
        <Image fluid={data.logo.childImageSharp.fluid} alt="logo for website" />
      </Link>
    </div>
  )
}

const query = graphql`
  query logo {
    logo: file(relativePath: { eq: "naked-logo.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 180) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Logo
