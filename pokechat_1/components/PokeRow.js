import React from 'react';
import PokeAvatar from './PokeAvatar';

export default class PokeRow extends React.Component {
    onClick(ev) {
        this.props.growl.call(null, this.props.name)
    }
    
    render() {
        return <div className="pokerow" onClick={this.onClick.bind(this)}>
            <PokeAvatar number={this.props.number} />
            {this.props.name}
        </div>
        }
    }