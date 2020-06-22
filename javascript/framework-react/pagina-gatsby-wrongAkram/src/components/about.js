import React from 'react';
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

const About = () => {
//copiado do image.js
const data = useStaticQuery(graphql`
query {
  aboutUm: file(relativePath: { eq: "about-um.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  aboutDois: file(relativePath: { eq: "about-dois.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

    return (
        <div className="about">
                <div className="container">
                    <div class="inner-about">

                      <div className="content">
                        <h3>MICAZEV</h3>
                        <h4>aka Michelle Azevedo</h4>
                        <p>I'm a Brazillian Front end developer based in São Paulo. 
                        I'm almost 30, vegetarian and yoga practicioner for almost then 10 years 
                          I'm interested in Design, sociology and love listening to jazz. 
</p>
                        <div className="btn-row">
                          <Link to="/more">Saiba Mais</Link>
                        </div>
                      </div>

                      <div className="images">
                        <div className="top-right">
                          <Img fluid={data.aboutUm.childImageSharp.fluid } /> 
                        </div>
                        <div className="bottom-left">
                          <Img fluid={data.aboutDois.childImageSharp.fluid } /> 
                        </div>
                      </div>
                    </div>
                </div>
                <div className="black-box"></div>
                <div className="black-box overlay"></div>

       </div>
       
    )
    
}

export default About