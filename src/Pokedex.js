import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		const { exp, pokemon, isWinner } = this.props;
		return (
			<div className="Pokedex">
				<h1>Pokedex!</h1>
				<p>Total Experience: {exp}</p>
				<p>{isWinner ? 'WINNER!' : 'LOSER'}</p>
				<div className="Pokedex-cards">
					{pokemon.map((pokemon) => (
						<Pokecard
							id={pokemon.id}
							name={pokemon.name}
							type={pokemon.type}
							exp={pokemon.base_experience}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Pokedex;
