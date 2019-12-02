// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage

import React, { Component } from "react"
import { graphql } from "gatsby"
import FilmList from '../components/films/FilmList.js';
import CharacterList from '../components/characters/CharacterList.js';

export const GatsbyQuery = graphql`
{
  swapi {
    allFilms {
      id,
      title,
      releaseDate,
      openingCrawl,
      episodeId,
      director
    },
    allPersons {
      id,  
      name,
      homeworld {
        name
      },
      species {
        name
      },
      birthYear
      height,
      eyeColor,
      starships {
        name
      }
    }
  }
}`

class StarWarsApp extends Component {
	render() {
		const {swapi: { allFilms, allPersons }} = this.props.data;

		return (
			<div className="star-wars-app">
				<div className="stars"></div>
				<div className="twinkling"></div>
				<div className="content">
				 	<h2 className="section__title">Films</h2>
				  <FilmList films={allFilms} />

				  <h2 className="section__title">Characters</h2>
				  <CharacterList characters={allPersons} />
				</div>
			</div>
		)
	}
}

export default StarWarsApp;
