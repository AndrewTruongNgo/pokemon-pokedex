import React from 'react';
import './Pokecard.css';

const padToThree = (number) => {
	if (number <= 999) {
		let num = `00${number}`;
		return num.slice(-3);
	}
};

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

class Pokecard extends React.Component {
	render() {
		const { id, name, type, exp } = this.props;
		const imgSrc = `${POKE_API}${padToThree(id)}.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{name}</h1>
				<img src={imgSrc} alt={name} />
				<div className="Pokecard-data">Type: {type}</div>
				<div className="Pokecard-data">EXP: {exp}</div>
			</div>
		);
	}
}

export default Pokecard;
