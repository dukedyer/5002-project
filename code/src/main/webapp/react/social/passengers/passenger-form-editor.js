import passengerService from "./passenger-service"
import User2TicketList from "../users/user-2-ticket-list";
import Employee2EmployeeList from "../employees/employee-2-employee-list";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

function idHelper (id) {
    if (id) {
        return true;
    }
}

const PassengerFormEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, []);

    const findUserById = (id) => passengerService.findUserById(id)
        .then(user => setUser(user))

    const deleteUser = (id) => passengerService.deleteUser(id)
        .then(() => history.back())

    const createUser = (user) => passengerService.createUser(user)
        .then(() => history.back())

    const updateUser = (id, newUser) => passengerService.updateUser(id, newUser)
        .then(() => history.back())


    return (
        <div>
            <h2>Passenger Editor</h2>
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

            <label>Created Date</label>
            <input type={"date"} onChange={(e) =>
                setUser(user =>
                            ({...user, createdDate: e.target.value}))}
                   value={user.createdDate}/><br/>

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
            {idHelper(user.id) && <User2TicketList/>}
        </div>
    )

}

export default PassengerFormEditor