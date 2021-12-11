const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = () => fetch("http://localhost:8080/api/employees")
    .then(response => response.json());

const goBack = () => {
    history.back()
};

const EmployeeList = () => {
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        findAllPlanes()
    }, [])
    const findAllPlanes = () =>findAllPlanes2().then(planes => setPlanes(planes))
    return(
        <div>
            <h2>Employees</h2>
            <button onClick={() => history.push("/employees/new")}>
                Add Employee
            </button>

            <button
                onClick={() => {goBack()}}>
                Cancel
            </button>
            <ul className="list-group">
                {
                    planes.map(user =>
                                   <li className="list-group-item"
                                       key={user.id}>
                                       <Link to={`/employees/${user.id}`}>
                                           ID: {user.id},
                                           Role: {user.role}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default EmployeeList;