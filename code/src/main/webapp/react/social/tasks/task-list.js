const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = () => fetch("http://localhost:8080/api/tasks")
    .then(response => response.json());

const goBack = () => {
    history.back()
};

const TaskList = () => {
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        findAllPlanes()
    }, [])
    const findAllPlanes = () =>findAllPlanes2().then(planes => setPlanes(planes))
    return(
        <div>
            <h2>Tasks</h2>
            <button onClick={() => history.push("/tasks/new")}>
                Add Task
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
                                       <Link to={`/tasks/${user.id}`}>
                                           ID: {user.id},
                                           Name: {user.name}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default TaskList;