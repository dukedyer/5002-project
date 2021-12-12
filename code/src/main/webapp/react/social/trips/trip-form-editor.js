import Trip2TicketList from "./trips-2-tickets-list";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

export const findPlaneById = (id) => fetch(`${"http://localhost:8080/api/trips"}/${id}`)
    .then(response => response.json())

export const deletePlane = (id) =>
    fetch(`${"http://localhost:8080/api/trips"}/${id}`, {
        method: "DELETE"
    })

function idHelper(id) {
    if (id) {
        return true;
    }
}

export const createPlane = (user) =>
    fetch("http://localhost:8080/api/trips", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePlaneHelper = (id, user) =>
    fetch(`${"http://localhost:8080/api/trips"}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const TripFormEditor = () => {
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
            <h2>Trip Editor</h2>
            <label>ID</label>
            <input value={user.id}/><br/>

            <label>Origin</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, origin: e.target.value}))}
                   value={user.origin}/><br/>

            <label>Destination</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, destination: e.target.value}))}
                   value={user.destination}/><br/>

            <label>Airline</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, airline: e.target.value}))}
                   value={user.airline}/><br/>

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
            {idHelper(user.id) && <Trip2TicketList/>}
        </div>
    )

}

export default TripFormEditor