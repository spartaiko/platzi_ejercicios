/*
*Module dependecies
*/

import React from 'react';

export default class PokeAvatar extends React.Component {
    render() {
        var url= `http://www.pokefanaticos.com/pokedex/imagenes/pokemon_imagenes/${this.props.number}.png`;
        return <div className="avatar-container">
        <img src={url} className="avatar" />
        </div>
    }
}