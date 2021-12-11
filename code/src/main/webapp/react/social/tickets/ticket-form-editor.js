import passengerService from "../passengers/passenger-service"
import Ticket2EmployeesList from "./ticket-2-employees-list";
import Ticket2PassengersList from "./ticket-2-passengers-list";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

export const findTicketById = (id) => fetch(`${"http://localhost:8080/api/tickets"}/${id}`)
    .then(response => response.json())

export const deleteTicket = (id) =>
    fetch(`${"http://localhost:8080/api/tickets"}/${id}`, {
        method: "DELETE"
    })

function idHelper(id) {
    if (id) {
        return true;
    }
}

export const createTicket = (user) =>
    fetch("http://localhost:8080/api/tickets", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateTicketHelper = (id, user) =>
    fetch(`${"http://localhost:8080/api/tickets"}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const TicketFormEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findUserById(id)
        }
    }, []);

    const findUserById = (id) => findTicketById(id)
        .then(user => setUser(user))

    const deleteUser = (id) => deleteTicket(id)
        .then(() => history.back())

    const createUser = (user) => createTicket(user)
        .then(() => history.back())

    const updateUser = (id, newUser) => updateTicketHelper(id, newUser)
        .then(() => history.back())

    function formatDate(date) {
        console.log(date);
        return date.toString().substr(0, 10);
    }

    return (
        <div>
            <h2>Ticket Editor</h2>
            <label>ID</label>
            <input value={user.id}/><br/>

            <label>Passenger</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, passenger: e.target.value}))}
                   value={user.passenger}/><br/>

            <label>Boarding Time</label>
            <input type={"date"} onChange={(e) =>
                setUser(user =>
                            ({...user, boardingTime: e.target.value}))}
                   value={user.boardingTime}/><br/>

            <label>Boarding Group</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, boardingGroup: e.target.value}))}
                   value={user.boardingGroup}/><br/>

            <label>Gate</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, gate: e.target.value}))}
                   value={user.gate}/><br/>
            <label>Trip</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, trip: e.target.value}))}
                   value={user.trip}/><br/>

            <label>Plane</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, planeId: e.target.value}))}
                   value={user.planeId}/><br/>

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
                onClick={() => updateUser(user.id, user)}>
                Save
            </button>
            {idHelper(user.id) && <Ticket2EmployeesList/>}
            {idHelper(user.id) && <Ticket2PassengersList/>}
        </div>
    )

}

export default TicketFormEditor