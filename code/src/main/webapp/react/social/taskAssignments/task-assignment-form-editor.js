import Trip2TicketList from "../trips/trip-2-tickets-list";
import Task2TripsList from "./task-2-trips-list";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

export const findPlaneById = (id) => fetch(`${"http://localhost:8080/api/task-assignments"}/${id}`)
    .then(response => response.json())

export const deletePlane = (id) =>
    fetch(`${"http://localhost:8080/api/task-assignments"}/${id}`, {
        method: "DELETE"
    })

function idHelper(id) {
    if (id) {
        return true;
    }
}

export const createPlane = (user) =>
    fetch("http://localhost:8080/api/task-assignments", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePlaneHelper = (id, user) =>
    fetch(`${"http://localhost:8080/api/task-assignments"}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const TaskAssignmentFormEditor = () => {
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
            <h2>Task Assignment Editor</h2>
            <label>ID</label>
            <input value={user.id}/><br/>

            <label>Employee</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, employee: e.target.value}))}
                   value={user.employee}/><br/>

            <label>Task</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, task: e.target.value}))}
                   value={user.task}/><br/>

            <label>Date</label>
            <input type={"date"} onChange={(e) =>
                setUser(user =>
                            ({...user, date: e.target.value}))}
                   value={user.date}/><br/>

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
        </div>
    )

}

export default TaskAssignmentFormEditor