import ReactDOM from 'react-dom';
import PokeAvatar from './PokeAvatar';

export default class PokeRow extends React.Component {
    render() {
        return <div className="pokerow">
            <PokeAvatar number={this.props.number} />
            {this.props.name}
        </div>
        }
    }