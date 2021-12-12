import Trip2TicketList from "../trips/trip-2-tickets-list";
import Task2TripsList from "./task-2-trips-list";
import Task2TaskAssignmentList from "./task-2-task-assignments-list";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

export const findPlaneById = (id) => fetch(`${"http://localhost:8080/api/tasks"}/${id}`)
    .then(response => response.json())

export const deletePlane = (id) =>
    fetch(`${"http://localhost:8080/api/tasks"}/${id}`, {
        method: "DELETE"
    })

function idHelper(id) {
    if (id) {
        return true;
    }
}

export const createPlane = (user) =>
    fetch("http://localhost:8080/api/tasks", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePlaneHelper = (id, user) =>
    fetch(`${"http://localhost:8080/api/tasks"}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const TaskFormEditor = () => {
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
            <h2>Task Editor</h2>
            <label>ID</label>
            <input value={user.id}/><br/>

            <label>Status</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, status: e.target.value}))}
                   value={user.status}/><br/>

            <label>Name</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, name: e.target.value}))}
                   value={user.name}/><br/>

            <label>Trip</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, trip: e.target.value}))}
                   value={user.trip}/><br/>

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
            {idHelper(user.id) && <Task2TripsList/>}
            {idHelper(user.id) && <Task2TaskAssignmentList/>}
        </div>
    )

}

export default TaskFormEditor