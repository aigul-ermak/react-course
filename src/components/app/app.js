import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
	const data = [
		{name: 'John C.', salary:'800', increase: false, id: 1},
		{name: 'Samantha M.', salary:'3000', increase: true, id: 2},
		{name: 'Luke S.', salary:'1500', increase: false, id: 3},
		{name: 'Sam B.', salary:'2500', increase: true, id: 4}
	]

	return (
		<div className = "app">
		<AppInfo />

		<div className="search-panel">
		<SearchPanel/>
		<AppFilter/>

		</div>
		<EmployeesList data={data}/>
		<EmployeesAddForm/>

		</div>
	)
}

export default App;
