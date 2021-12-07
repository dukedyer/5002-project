import passengerService from "../passengers/passenger-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

export const findTicketById = (id) => fetch(`${"http://localhost:8080/api/tickets"}/${id}`)
    .then(response => response.json())

export const deleteTicket = (id) =>
    fetch(`${"http://localhost:8080/api/tickets"}/${id}`, {
        method: "DELETE"
    })

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
        if(id !== "new") {
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

            <button
                onClick={() => {
                    history.back()}}>
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
        </div>
    )

}

export default TicketFormEditor