import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
//import Features from '../components/Features'
import LatestNews from '../components/LatestNews'

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
            //display: 'none',
            color: 'seashell',
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
                <br></br>

                <article className="message mc-message">
                  <div className="message-body">
                    <strong>Citation:</strong><br></br>
                    <cite> Müller, R. D., Cannon, J., Qin, X., Watson, R. J., Gurnis, M., Williams, S., et al. 2018. 
                      GPlates: Building a virtual Earth through deep time. Geochemistry, Geophysics, Geosystems, 19. doi:10.1029/2018GC007584.
                    </cite>
                    </div>
                </article>

                <hr></hr>

                <div className="container"
                  style={{
                    marginTop: '2rem',
                  }}
                >
                  <div>
                    <h3 className="has-text-weight-semibold is-size-2" style={{ marginBottom: '0'}}>
                      GPlates Suite
                    </h3>
                  </div>
                  <div className="columns section is-multiline">
                    <div className="column is-6" 
                      style={{
                        textAlign:'center'
                      }}
                    >
                      <h3 className=""><a className="mc-a" href="https://www.gplates.org/docs/pygplates/" target="_blank" rel="noreferrer">pyGPlates</a></h3> 
                      <div className="mc-card-container">
                        <img
                          src={pygplatesLogo}
                          alt="pyGPlates Screenshot"
                          className="mc-card"
                          style={{
                          }}
                          />
                        <div className="mc-card-overlay">
                          <div className="mc-overlay-text">https://www.gplates.org/docs/pygplates/</div>
                        </div>
                      </div>
                      <br></br>
                      <p style={{textAlign:'left'}}>
                        The GPlates Python library (pyGPlates) enables access to GPlates functionality via the Python programming language. 
                        It allows users to use GPlates in a programmatic way and hence provides much more flexibility than the GPlates desktop interface can offer. 
                      </p>
                    </div>
                    <div className="column is-6" style={{textAlign:'center'}}>
                    <h3 className=""><a className="mc-a" href="https://portal.gplates.org/" target="_blank" rel="noreferrer">GPlates Portal</a></h3> 
                    <div className="mc-card-container">
                      <img
                        src={portalScreenshot}
                        alt="GPlates Portal Screenshot"
                        className="mc-card"
                        style={{
                         
                        }}
                      />  
                      <div className="mc-card-overlay">
                        <div className="mc-overlay-text">https://portal.gplates.org/</div>
                      </div>
                      </div>
                      <br></br>
                      <p style={{textAlign:'left'}}>
                        The GPlates Web Portal is a gateway to a series of web pages for the interactive visualisation of cutting-edge geoscience datasets, 
                        all possible within freely available web browsers.
                      </p>
                    </div>
                    <div className="column is-6" style={{textAlign:'center'}}>
                    <h3 className=""><a className="mc-a" href="https://gws.gplates.org/" target="_blank" rel="noreferrer">GPlates Web Services</a></h3> 
                    <div className="mc-card-container">
                      <img
                        src={gwsScreenshot}
                        alt="GPlates Web Service Screenshot"
                        className="mc-card"
                        style={{
                          
                        }}
                      /> 
                      <div className="mc-card-overlay">
                        <div className="mc-overlay-text">https://gws.gplates.org/</div>
                      </div>
                      </div> 
                      <br></br>
                      <p style={{textAlign:'left'}}>
                        GPlates web service interface allows users to access plate tectonics reconstruction services via Internet. 
                        The interface has been designed to provide paleo-geographic coordinates in a simplest way.
                        The service can be used in any devices which have implemented HTTP protocol and have Internet connection.
                      </p>
                    </div>                  
                    <div className="column is-6" style={{textAlign:'center'}}>
                    <h3 className=""><a className="mc-a" href="https://discourse.gplates.org/" target="_blank" rel="noreferrer">GPlates Forum</a></h3> 
                    <div className="mc-card-container">
                      <img
                        src={forumScreenshot}
                        alt="GPlates Forum Screenshot"
                        className="mc-card"
                        style={{
                          
                        }}
                      />  
                      <div className="mc-card-overlay">
                        <div className="mc-overlay-text">https://discourse.gplates.org/</div>
                      </div>
                      </div>
                      <br></br>
                      <p style={{textAlign:'left'}}>
                        Welcome to the GPlates Community Forum!
                        This online forum is a place for the users, developers and researchers to discuss GPlates related topics.
                      </p>
                    </div>
                  </div>
                </div>

                <br></br>
                <hr></hr>

                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest News
                  </h3>
                  <LatestNews />
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
