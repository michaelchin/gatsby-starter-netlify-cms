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
import pygplatesLogo from '../img/sunflower.jpg' 
import portalScreenshot from '../img/sunflower.jpg'
import gwsScreenshot from '../img/sunflower.jpg'
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
        backgroundPosition: `left top`,
        backgroundAttachment: 'fixed',
        textAlign: `center`,
        minHeight: `700px`,
        position: 'relative'
      }}
    >
    <div className="tint"></div>
      <div
        style={{
          zIndex: '10',
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
            color: '#fff',
            padding: '0.25em',
            maxWidth: '768px',
            lineHeight: '1.5',
            margin: 'auto',
            fontFamily: 'Open Sans Bold, sans-serif'
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

    <div className="container-fliud box" style={{backgroundColor: 'whitesmoke'}}>
      <div className="container">
             
        <div className="column is-12">
         
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
                  Learn More
                </a>
              </div>
              
            <br></br>
          
        </div>
      </div>
    </div>



    <div className="container">
      <div className="column is-12 is-offset-0">
             
        <div className="column is-12">
          <div className="box" style={{backgroundColor: 'whitesmoke',padding: '0'}}>
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
                  Learn More
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
          <div className="box" style={{backgroundColor: "whitesmoke", padding: '0'}}>  
          <h3 className="has-text-weight-semibold is-size-3" style={{ textAlign: 'center'}}>
            GPlates Suite
          </h3>
          
          <div className="columns section is-multiline">

            <div className="column is-4" 
              style={{
                textAlign:'center',
                position: 'relative',
                paddingBottom:'70px'
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
              <div style={{textAlign:'left'}}>
                The <b>GPlates Python library (pyGPlates)</b> enables access to GPlates functionality via the Python programming language. 
              </div>
              <div style={{position:'absolute', bottom:'0', left:'0', right:'0'}} >
                <a className="button is-link" href="https://www.gplates.org/docs/pygplates/" >
                  Learn More
                </a>
              </div>
            </div>

            <div className="column is-4" style={{textAlign:'center', position: 'relative', paddingBottom:'70px'}}>
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
              <div style={{textAlign:'left'}}>
                The <b>GPlates Web Portal</b> is a gateway to a series of web pages for the interactive visualisation of cutting-edge geoscience datasets.
              </div>
              <div style={{position:'absolute', bottom:'0', left:'0', right:'0'}} >
                <a className="button is-link" href="https://portal.gplates.org/" >
                  Learn More
                </a>
              </div>
            </div>

            <div className="column is-4" style={{textAlign:'center', position: 'relative', paddingBottom:'70px'}}>
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
              <div style={{textAlign:'left'}}>
                The <b>GPlates Web Service</b> interface allows users to access plate tectonics reconstruction services via Internet. 
              </div>
              <div style={{position:'absolute', bottom:'0', left:'0', right:'0'}} >
                <a className="button is-link" href="https://gws.gplates.org/" >
                  Learn More
                </a>
              </div>
            </div>                  
            

          
          
          </div>
        </div>
        </div>

        <hr className="mc-hr"></hr>

        <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-3">
                    Latest News
                  </h3>
                  <br></br>
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
