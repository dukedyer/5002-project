const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = () => fetch("http://localhost:8080/api/task-assignments")
    .then(response => response.json());

const goBack = () => {
    history.back()
};

const TaskAssignmentList = () => {
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        findAllPlanes()
    }, [])
    const findAllPlanes = () =>findAllPlanes2().then(planes => setPlanes(planes))
    return(
        <div>
            <h2>Task Assignments</h2>
            <button onClick={() => history.push("/task-assignments/new")}>
                Add Task Assignment
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
                                       <Link to={`/task-assignments/${user.id}`}>
                                           ID: {user.id},
                                           Date: {user.date},
                                           Task: {user.task}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default TaskAssignmentList;