const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

export const findPlaneById = (id) => fetch(`${"http://localhost:8080/api/users"}/${id}`)
    .then(response => response.json())

export const deletePlane = (id) =>
    fetch(`${"http://localhost:8080/api/users"}/${id}`, {
        method: "DELETE"
    })

export const createPlane = (user) =>
    fetch("http://localhost:8080/api/users", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePlaneHelper = (id, user) =>
    fetch(`${"http://localhost:8080/api/users"}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const UserFormEditor = () => {
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
            <h2>UserEditor</h2>
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

export default UserFormEditor