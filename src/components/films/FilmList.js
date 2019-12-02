import styles from "../card.module.css"
import React, { Component } from "react"

import FilmCard from './FilmCard.js';

class FilmList extends Component {
	render() {
		const cards = this.props.films.map((film, index) => (
      <li className={styles.film__card} key={film.id} >
        <FilmCard film={film} />
      </li>
    ));

		return <ul className={styles.cards__container}>{ cards }</ul>;
	}
}

export default FilmList;