import './employees-list-item.css';
import {Component} from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onCrease = () => {
        this.setState(({increase}) => ({//state.increase
                increase: !increase
            })
        )
    }
    onStarHandler = () => {
        this.setState(({star}) => ({
            star: !star
        }))
    }

    render() {
        const {name, salary} = this.props
        const {increase, star} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNames += ' increase';
        }
        if (star) {
            classNames += ' like';

        }

        return (
            <li className={classNames}>
			<span
                className="list-group-item-label"
                onClick={this.onStarHandler}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm"
                            onClick={this.onCrease}>
                        <i className="fas fa-child"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm">
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;
