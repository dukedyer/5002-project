const {Link, useHistory} = window.ReactRouterDOM;
import userService from "./passenger-service"
const { useState, useEffect } = React;


const PassengerList = () => {
    const history = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    return(
        <div>
            <h2>Passengers</h2>
            <button onClick={() => history.push("/passengers/new")}>
                Add Passenger
            </button>

            <ul className="list-group">
                {
                    users.map(user =>
                        <li className="list-group-item"
                            key={user.id}>
                            <Link to={`/passengers/${user.id}`}>
                                {user.firstName},
                                {user.lastName},
                                {user.username}
                            </Link>
                        </li>)
                }
            </ul>

        </div>

    )
}

export default PassengerList;