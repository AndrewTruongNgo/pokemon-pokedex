import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
	static defaultProps = {
		pokemon: [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
	};

	render() {
		const handOne = [];
		const handTwo = [ ...this.props.pokemon ];
		while (handTwo.length > handOne.length) {
			const randomIndex = Math.floor(Math.random() * handTwo.length);
			const randomPokemon = handTwo.splice(randomIndex, 1)[0];
			handOne.push(randomPokemon);
		}
		const expOne = handOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
		const expTwo = handTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

		return (
			<div>
				<Pokedex pokemon={handOne} exp={expOne} isWinner={expOne > expTwo} />
				<Pokedex pokemon={handTwo} exp={expTwo} isWinner={expOne > expTwo} />
			</div>
		);
	}
}

export default Pokegame;
