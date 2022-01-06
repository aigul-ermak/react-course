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
                {name: 'Samantha M.', salary: '3000', increase: true, id: 2},
                {name: 'Luke S.', salary: '1500', increase: false, id: 3},
                {name: 'Sam B.', salary: '2500', increase: true, id: 4}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id == id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            // return {
            // 	data: newArr
            // }
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
            id: this.maxId
        }
     this.setState(({data}) => {
         const newArr = [...data, newItem];
         return {
             data: newArr
         }
     })

    }

    render() {
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data}
                               onDelete={this.deleteItem}
                />
                <EmployeesAddForm
                    onAdd={this.addItem}/>

            </div>
        )
    }
}
export default App;
