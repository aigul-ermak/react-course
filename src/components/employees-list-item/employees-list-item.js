
import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => {

	let classNames = 'list-group-item d-flex justify-content-between';
	if (increase) {
		classNames += ' increase';
	};

	return (
<li className={classNames}>
	<span className="list-group-item-label">{name}</span>
	<input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
		<div className="d-flex justify-content-center align-items-center">
				<button type="button"
				className="btn-cookie btn-sm">
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

export default EmployeesListItem;
