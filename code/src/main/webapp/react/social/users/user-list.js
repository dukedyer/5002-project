const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = () => fetch("http://localhost:8080/api/users")
    .then(response => response.json());

const goBack = () => {
    history.back()
};

const UserList = () => {
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        findAllPlanes()
    }, [])
    const findAllPlanes = () =>findAllPlanes2().then(planes => setPlanes(planes))
    return(
        <div>
            <h2>Users</h2>
            <button onClick={() => history.push("/users/new")}>
                Add User
            </button>

            <button
                onClick={() => {goBack()}}>
                Cancel
            </button>
            <ul className="list-group">
                {
                    planes.map(user =>
                                  <li className="list-group-item"
                                      key={user.id}>
                                      <Link to={`/users/${user.id}`}>
                                          ID: {user.id},
                                          Name: {user.firstName} {user.lastName}
                                      </Link>
                                  </li>)
                }
            </ul>

        </div>

    )
}

export default UserList;