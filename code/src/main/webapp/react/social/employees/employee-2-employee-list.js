const {Link, useHistory, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = (id) => fetch(`${"http://localhost:8080/api/employee2employee"}/${id}`)
    .then(response => response.json());

const goBack = () => {
    history.back()
};

const Employee2EmployeeList = () => {
    const {id} = useParams()
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findAllPlanes(id)
        }
    }, [])
    const findAllPlanes = (id) =>findAllPlanes2(id).then(planes => setPlanes(planes))
    return(
        <div>
            <h2>Employee {id}'s Manager</h2>
            <ul className="list-group">
                {
                    planes.map(user =>
                                   <li className="list-group-item"
                                       key={user.id}>
                                       <Link to={`/employees/${user.id}`} onClick={ () => console.log(location)}>
                                           ID: {user.id},
                                           Name: {user.firstName} {user.lastName}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default Employee2EmployeeList;