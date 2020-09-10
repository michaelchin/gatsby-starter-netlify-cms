import React from 'react'
import Layout from '../../components/Layout'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import BackgroundImage from '../../../static/img/background.png'

class Screenshots extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
          }}
        >
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              //@boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              //backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Screenshots
          </h2>
        </div>

        <div className="column is-10 is-offset-1">
          <div className="columns is-multiline">
          {posts &&
            posts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id} title={post.frontmatter.title}>
              <Link to={post.fields.slug}>   
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.image,
                    alt: `screenshot image thumbnail for  ${post.frontmatter.title}`,
                  }}
                /> 
              </Link>      
            </div>
          ))}
          </div>
        </div>
        <br></br>
      </Layout>
    )
  }
}

Screenshots.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query screenshotsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "screenshots" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 360, maxHeight: 270, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Screenshots data={data} count={count} />}
  />
)
