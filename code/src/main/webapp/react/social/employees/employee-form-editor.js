
import PlaneFormEditor from "../planes/plane-form-editor";
import User2TicketList from "../users/user-2-ticket-list";
import PassengerList from "../passengers/passenger-list";

import PlaneList from "../planes/plane-list";
import Employee2EmployeeList from "./employee-2-employee-list";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

export const findPlaneById = (id) => fetch(`${"http://localhost:8080/api/employees"}/${id}`)
    .then(response => response.json())

function idHelper (id) {
    if (id) {
        return true;
    }
}
export const deletePlane = (id) =>
    fetch(`${"http://localhost:8080/api/employees"}/${id}`, {
        method: "DELETE"
    })

export const createPlane = (user) =>
    fetch("http://localhost:8080/api/employees", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePlaneHelper = (id, user) =>
    fetch(`${"http://localhost:8080/api/employees"}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const EmployeeFormEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findUserById(id)
        }
    }, []);

    const findUserById = (id) => findPlaneById(id).then(user => setUser(user))

    const deleteUser = (id) => deletePlane(id).then(() => history.back())

    const createUser = (user) => createPlane(user).then(() => history.back())

    const updatePlane = (id, newUser) => updatePlaneHelper(id, newUser).then(() => history.back())

    return (
        <div>
            <h2>Employee Editor</h2>
            <label>ID</label>
            <input value={user.id}/><br/>

            <label>First Name</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, firstName: e.target.value}))}
                   value={user.firstName}/><br/>

            <label>Last Name</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, lastName: e.target.value}))}
                   value={user.lastName}/><br/>

            <label>Date of Birth</label>
            <input type={"date"} onChange={(e) =>
                setUser(user =>
                            ({...user, dateOfBirth: e.target.value}))}
                   value={user.dateOfBirth}/><br/>

            <label>Email</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, email: e.target.value}))}
                   value={user.email}/><br/>

            <label>Username</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, username: e.target.value}))}
                   value={user.username}/><br/>

            <label>Password</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, password: e.target.value}))}
                   value={user.password}/><br/>

            <label>Start Date</label>
            <input type={"date"} onChange={(e) =>
                setUser(user =>
                            ({...user, startDate: e.target.value}))}
                   value={user.startDate}/><br/>

            <label>Role</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, role: e.target.value}))}
                   value={user.role}/><br/>

            <label>Airline</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, airline: e.target.value}))}
                   value={user.airline}/><br/>

            <label>Manager</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, manager: e.target.value}))}
                   value={user.manager}/><br/>
            <button
                onClick={() => {
                    history.back()
                }}>
                Cancel
            </button>

            <button
                onClick={() => deleteUser(user.id)}>
                Delete
            </button>

            <button
                onClick={() => createUser(user)}>
                Create
            </button>

            <button
                onClick={() => updatePlane(user.id, user)}>
                Save
            </button>
            {idHelper(user.id) && <User2TicketList/>}
            {idHelper(user.id) && <Employee2EmployeeList/>}
        </div>
    )

}

export default EmployeeFormEditor