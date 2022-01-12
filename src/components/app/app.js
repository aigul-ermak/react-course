import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Samantha M.', salary: '3000', increase: true, rise: true, id: 1},
                {name: 'Luke S.', salary: '1500', increase: false, rise: false, id: 2},
                {name: 'Sam B.', salary: '2500', increase: true, rise: false, id: 3}
            ],
            term: ' ',
            filter: ''
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(f => f.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    }
                    return item;
                })
            })
        )
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdatedSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }

    }

    inFilterSelect = (filter) => {
        this.setState({filter})
    }


    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)

        return (
            <div className="app">
                <AppInfo employees={employees}
                         increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel onUpdatedSearch={this.onUpdatedSearch}/>
                    <AppFilter filter={filter}  inFilterSelect={this.inFilterSelect}/>
                </div>
                <EmployeesList data={visibleData}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}/>
                {/*onToggleIncrease={this.onToggleIncrease}*/}
                {/*onToggleRise={this.onToggleRise}*/}

                <EmployeesAddForm
                    onAdd={this.addItem}/>

            </div>
        )
    }
}

export default App;
