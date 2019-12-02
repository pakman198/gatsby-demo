import styles from "../card.module.css"
import React from "react"

import CharacterCard from './CharacterCard.js';

class CharacterList extends React.Component {
  render() {
  
    const cards = this.props.characters.map((character, index) =>
      <li className={styles.character__card} key={character.id}><CharacterCard character={character} /></li>
    );
    
    return <ul className={styles.cards__container}>{ cards }</ul>;
  }
}
export default CharacterList;