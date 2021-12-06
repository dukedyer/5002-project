const {Link, useHistory} = window.ReactRouterDOM;
import passengerService from "../passengers/passenger-service"
const { useState, useEffect } = React;

const goBack = () => {
    history.back()
};

const TicketList = () => {
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
            <h2>Tickets</h2>
            <button onClick={() => history.push("/tickets/new")}>
                Add Ticket
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
                                      <Link to={`/tickets/${user.id}`}>
                                          {user.id},
                                          {user.createdDate},
                                      </Link>
                                  </li>)
                }
            </ul>

        </div>

    )
}

export default TicketList;