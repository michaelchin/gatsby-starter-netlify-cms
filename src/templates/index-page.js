import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import GPlatesMainScreenshot from '../img/SATL_ExponentialStretching_650x380.png'
import logo from '../img/logo.svg'
import pygplatesLogo from '../img/pygplates-screenshot.png' 
import portalScreenshot from '../img/portal-screenshot.png'
import gwsScreenshot from '../img/gws-screenshot.png'
import forumScreenshot from '../img/forum-screenshot.png'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        textAlign: `center`,
        minHeight: `500px`,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1280px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          paddingLeft: '1em',
          paddingRight: '1em',
          paddingBottom: '2em',
        }}
      >
        <img
          src={logo}
          alt="GPlates Logo"
          style={{ width: '20em', height: '4em', margin: '1em auto' }}
        />
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'seashell',
            lineHeight: '1',
            padding: '0.25em',
            maxWidth: '768px',
            lineHeight: '1.5',
            margin: 'auto',
            backgroundColor: 'rgba(76, 76, 76, 0.5)',
          }}
        >
          {subheading}
        </h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <p>
          <a href="https://sourceforge.net/projects/gplates/files/gplates/2.2/"
             style={{
                color: '#fff',
                textDecoration: 'underline',
                fontStyle: 'italic',
                fontSize: 'large',
             }}
          >
            Latest release v2.2
          </a>
          <br></br>
        </p>
        <br></br><br></br>
        <p>
          <a className="button is-warning" href="https://sourceforge.net/projects/gplates/files/gplates/2.2/"
             style={{
               color: 'blue',
               boxShadow: 'inset 0 0 0 2px #000',
               backgroundColor: 'gold',
             }}
          >
            Install Now
          </a>
        </p>
      </div>
    </div>


    <div className="container" style={{backroundImage: `background`}}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">

                <div className="container"
                  style={{
                    backgroundColor: '#f0f0f0',
                    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.2) inset',
                    marginTop: '5rem',
                    borderRadius: '15px',
                  }}
                >
                <div className="columns section">
                  <div className="column is-7">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <p className="subtitle">{mainpitch.description}
                      {description}<a href="https://www.google.com">hehe</a></p>
                    </div>
                  </div>

                  <div className="column is-5">    
                    <img
                      src={GPlatesMainScreenshot}
                      alt="GPlates Screenshot"
                      style={{  }}
                    /> 
                  </div>
                </div>
                <div 
                  style={{textAlign:'center'}}
                >
                  <a className="button is-link" href="https://sourceforge.net/projects/gplates/files/gplates/2.2/"
                    style={{ }}
                  >
                    Learn More...
                  </a>
                  <br></br><br></br>
                </div>
                </div>


                <div className="container"
                  style={{
                    marginTop: '5rem',
                  }}
                >
                  <div>
                    <h3 className="has-text-weight-semibold is-size-2">
                      GPlates is more than a desktop software now!
                    </h3>
                  </div>
                  <div className="columns section is-multiline">
                    <div className="column is-6" style={{textAlign:'center'}}>
                      <img
                        src={pygplatesLogo}
                        alt="GPlates Screenshot"
                        style={{
                          maxWidth: '340px',  
                          boxShadow: '20px 20px 20px -20px rgba(0,0,0,0.57)',
                          border: 'black 1px solid',
                          borderRadius: '10px',
                        }}
                      />  
                      <h3 className="">pyGPlates</h3> 
                    </div>
                    <div className="column is-6" style={{textAlign:'center'}}>
                      <img
                        src={portalScreenshot}
                        alt="GPlates Screenshot"
                        style={{
                          maxWidth: '340px',  
                          boxShadow: '20px 20px 20px -20px rgba(0,0,0,0.57)',
                          border: 'black 1px solid',
                          borderRadius: '10px',
                        }}
                      />  
                      <h3 className="">GPlates Portal</h3> 
                    </div>
                    <div className="column is-6" style={{textAlign:'center'}}>
                      <img
                        src={gwsScreenshot}
                        alt="GPlates Web Service Screenshot"
                        style={{
                          maxWidth: '340px',  
                          boxShadow: '20px 20px 20px -20px rgba(0,0,0,0.57)',
                          border: 'black 1px solid',
                          borderRadius: '10px',
                        }}
                      />  
                      <h3 className="">GPlates Web Services</h3> 
                    </div>                  
                    <div className="column is-6" style={{textAlign:'center'}}>
                      <img
                        src={forumScreenshot}
                        alt="GPlates Forum Screenshot"
                        style={{
                          maxWidth: '340px',  
                          boxShadow: '20px 20px 20px -20px rgba(0,0,0,0.57)',
                          border: 'black 1px solid',
                          borderRadius: '10px',
                        }}
                      />  
                      <h3 className="">GPlates Forum</h3> 
                    </div>
                  </div>
                </div>


                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
