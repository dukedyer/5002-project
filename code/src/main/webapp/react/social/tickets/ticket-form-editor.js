import passengerService from "../passengers/passenger-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const TicketFormEditor = () => {
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

            <label>Passenger</label>
            <input onChange={(e) =>
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

export default TicketFormEditor