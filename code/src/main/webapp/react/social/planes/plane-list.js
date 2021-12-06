const {Link, useHistory} = window.ReactRouterDOM;
import userService from "../passengers/passenger-service"
const { useState, useEffect } = React;


const PlaneList = () => {
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
            <h2>Planes</h2>
            <button onClick={() => history.push("/planes/new")}>
                Add Plane
            </button>

            <ul className="list-group">
                {
                    users.map(user =>
                                  <li className="list-group-item"
                                      key={user.id}>
                                      <Link to={`/planes/${user.id}`}>
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

export default PlaneList;