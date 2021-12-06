const {Link, useHistory} = window.ReactRouterDOM;
import passengerService from "./passenger-service"
const { useState, useEffect } = React;

const goBack = () => {
    history.back()
};

const PassengerList = () => {
    const history = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        passengerService.findAllUsers()
            .then(users => setUsers(users))
    return(
        <div>
            <h2>Passengers</h2>
            <button onClick={() => history.push("/passengers/new")}>
                Add Passenger
            </button>
            <button
                onClick={() => {goBack()}}>
                Cancel
            </button>
            <ul className="list-group">
                {
                    users.map(user =>
                        <li className="list-group-item"
                            key={user.id}>
                            <Link to={`/passengers/${user.id}`}>
                                {user.id},
                                {user.createdDate},
                            </Link>
                        </li>)
                }
            </ul>

        </div>

    )
}

export default PassengerList;