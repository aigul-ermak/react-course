
import './app-info.css';

const AppInfo = ({employees, increased}) => {



	return(
		<div className="app-info">
			<h1>Employee count in the company N</h1>
			<h2>Total amount of employees: {employees} </h2>
			<h2>The bonus will br given to:  {increased} </h2>
		</div>
	)
}

export default AppInfo;
