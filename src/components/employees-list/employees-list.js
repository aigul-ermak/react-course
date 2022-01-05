
import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data}) => {

	const elements = data.map(item => {
		const {id, ...itemProps} = item;
;		return (
			<EmployeesListItem key={item.id} name={item.name} salary={item.salary} increase={item.increase}/>
		)}
	)

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>

	)
}

export default EmployeesList;
