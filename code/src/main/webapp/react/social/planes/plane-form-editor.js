import userService from "../passengers/passenger-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const PlaneFormEditor = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findUserById(id)
        }
    }, []);

    const findUserById = (id) => userService.findUserById(id)
        .then(user => setUser(user))

    const deleteUser = (id) => userService.deleteUser(id)
        .then(() => history.back())

    const createUser = (user) => userService.createUser(user)
        .then(() => history.back())

    const updateUser = (id, newUser) => userService.updateUser(id, newUser)
        .then(() => history.back())


    return (
        <div>
            <h2>Plane Editor</h2>
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
                            ({...user, dob: e.target.value}))}
                   value={user.dob}/><br/>

            <label>Email</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, email: e.target.value}))}
                   value={user.email}/><br/>

            <label>User Name</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, userName: e.target.value}))}
                   value={user.userName}/><br/>

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
        </div>
    )

}

export default PlaneFormEditor