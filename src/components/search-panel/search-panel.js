import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdatedSearch = (e) => {
        const term = e.currentTarget.value;
        this.setState({term})
        this.props(term)

    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Find an employee"
                   value={this.state.term}
                   onChange={this.onUpdatedSearch}/>
        )

    }
}

export default SearchPanel;
