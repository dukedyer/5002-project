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

            <label>Serial Number</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, serialNumber: e.target.value}))}
                   value={user.serialNumber}/><br/>

            <label>Name</label>
            <input onChange={(e) =>
                setUser(user =>
                            ({...user, name: e.target.value}))}
                   value={user.name}/><br/>

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