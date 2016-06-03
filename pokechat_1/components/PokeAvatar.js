/*
*Module dependecies
*/

import ReactDOM from 'react-dom';

export default class PokeAvatar extends React.Component {
    render() {
        var url= `http://www.pokefanaticos.com/pokedex/imagenes/pokemon_imagenes/${this.props.number}.png`;
        return <img src={url} className="avatar" />
    }
}