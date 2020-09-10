import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
//import Features from '../components/Features'
import LatestNews from '../components/LatestNews'
import Content, { HTMLContent } from '../components/Content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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
  descMarkdown
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
          <a className="button is-success is-rounded" href="https://sourceforge.net/projects/gplates/files/gplates/2.2/">
           <span className="icon"> <FontAwesomeIcon icon={faDownload} /></span> <span>Download Now</span>
          </a>
          
        </p>
      </div>
    </div>

    <div className="container">
      <div className="column is-10 is-offset-1">
             
        <div className="column is-12">
          <div  style={{backgroundColor: 'whitesmoke',}}>
            <div className="columns section">
              <div className="column is-7">
                <div className="tile">
                  <h1 className="mc-title title">{mainpitch.title}</h1>
                </div>
                <div className="tile">
                  <div className="content">
                    <br></br>
                    <HTMLContent content={descMarkdown.childMarkdownRemark.html}/>
                  </div>
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
            
            <div style={{textAlign:'center'}} >
                <a className="button is-link" href="https://sourceforge.net/projects/gplates/files/gplates/2.2/" >
                  Learn More...
                </a>
              </div>
              
            <br></br>
          </div>
        </div>

        <br></br>

        <div className="column is-12">
          <article className="message mc-message">
            <div className="message-body">
              <strong>Citation:</strong><br></br>
              <cite> Müller, R. D., Cannon, J., Qin, X., Watson, R. J., Gurnis, M., Williams, S., et al. 2018. 
                GPlates: Building a virtual Earth through deep time. Geochemistry, Geophysics, Geosystems, 19. doi:10.1029/2018GC007584.
              </cite>
              </div>
          </article>
        </div>

        <br></br>

        <div className="column is-12">
          <div style={{backgroundColor: "whitesmoke"}}>  
          <h3 className="has-text-weight-semibold is-size-3" style={{ textAlign: 'center'}}>
            GPlates Suite
          </h3>
          
          <div className="columns section is-multiline">

            <div className="column is-6" 
              style={{
                textAlign:'center'
              }}
            >
              <h3 style={{display:'none'}}><a className="mc-a" href="https://www.gplates.org/docs/pygplates/" target="_blank" rel="noreferrer">pyGPlates</a></h3> 
              <div className="mc-card-container">
                <img
                  src={pygplatesLogo}
                  alt="pyGPlates Screenshot"
                  className="mc-card"
                  style={{
                  }}
                  />
                <a className="mc-a" href="https://www.gplates.org/docs/pygplates/" target="_blank" rel="noreferrer">
                  <div className="mc-card-overlay">
                    <div className="mc-overlay-text">https://www.gplates.org/docs/pygplates/</div>
                  </div>
                </a>
              </div>
              <br></br>
              <p style={{textAlign:'left'}}>
                The GPlates Python library (pyGPlates) enables access to GPlates functionality via the Python programming language. 
                It allows users to use GPlates in a programmatic way and hence provides much more flexibility than the GPlates desktop interface can offer. 
              </p>
            </div>

            <div className="column is-6" style={{textAlign:'center'}}>
              <h3 style={{display:'none'}}><a className="mc-a" href="https://portal.gplates.org/" target="_blank" rel="noreferrer">GPlates Portal</a></h3> 
              <div className="mc-card-container">
                <img
                  src={portalScreenshot}
                  alt="GPlates Portal Screenshot"
                  className="mc-card"
                  style={{
                  
                  }}
                />  
                <a className="mc-a" href="https://portal.gplates.org/" target="_blank" rel="noreferrer">
                <div className="mc-card-overlay">
                  <div className="mc-overlay-text">https://portal.gplates.org/</div>
                </div>
                </a>
              </div>
              <br></br>
              <p style={{textAlign:'left'}}>
                The GPlates Web Portal is a gateway to a series of web pages for the interactive visualisation of cutting-edge geoscience datasets, 
                all possible within freely available web browsers.
              </p>
            </div>

            <div className="column is-6" style={{textAlign:'center'}}>
              <h3 style={{display:'none'}}><a className="mc-a" href="https://gws.gplates.org/" target="_blank" rel="noreferrer">GPlates Web Services</a></h3>
                <div className="mc-card-container">
                  <img
                    src={gwsScreenshot}
                    alt="GPlates Web Service Screenshot"
                    className="mc-card"
                    style={{
                      
                    }}
                  /> 
                  <a className="mc-a" href="https://gws.gplates.org/" target="_blank" rel="noreferrer">
                    <div className="mc-card-overlay">
                      <div className="mc-overlay-text">https://gws.gplates.org/</div>
                    </div>
                  </a>
              </div> 
              <br></br>
              <p style={{textAlign:'left'}}>
                GPlates web service interface allows users to access plate tectonics reconstruction services via Internet. 
                The interface has been designed to provide paleo-geographic coordinates in a simplest way.
                The service can be used in any devices which have implemented HTTP protocol and have Internet connection.
              </p>
            </div>                  
            
            <div className="column is-6" style={{textAlign:'center'}}>
              <h3 style={{display:'none'}}><a className="mc-a" href="https://discourse.gplates.org/" target="_blank" rel="noreferrer">GPlates Forum</a></h3> 
                <div className="mc-card-container">
                  <img
                    src={forumScreenshot}
                    alt="GPlates Forum Screenshot"
                    className="mc-card"
                    style={{
                      
                    }}
                  />  

                <a className="mc-a" href="https://discourse.gplates.org/" target="_blank" rel="noreferrer">
                  <div className="mc-card-overlay">
                    <div className="mc-overlay-text">https://discourse.gplates.org/</div>
                  </div>
                </a>
              </div>
              <br></br>
              <p style={{textAlign:'left'}}>
                Welcome to the GPlates Community Forum!
                This online forum is a place for the users, developers and researchers to discuss GPlates related topics.
              </p>
            </div>
          </div>
        </div>
        </div>

        <hr className="mc-hr"></hr>

        <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-3">
                    Latest News
                  </h3>
                  <LatestNews />
                  <div className="column is-12 has-text-centered">
                    <Link className="button is-primary" to="/news">
                      More News
                    </Link>
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
  descMarkdown: PropTypes.object,
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
        descMarkdown={frontmatter.descMarkdown}
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
        descMarkdown {
          childMarkdownRemark {
            html
          }
        }
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
