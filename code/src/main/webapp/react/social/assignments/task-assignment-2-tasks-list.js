const {Link, useHistory, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = (id) => fetch(`${"http://localhost:8080/api/task-assignment2tasks"}/${id}`)
    .then(response => response.json());

const goBack = () => {
    history.back()
};

function isStuff(stuff) {
    return stuff.length > 0
}

const TaskAssignment2TaskList = () => {
    const {id} = useParams()
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findAllPlanes(id)
        }
    }, [])
    const findAllPlanes = (id) =>findAllPlanes2(id).then(planes => setPlanes(planes))
    return(
        <div>
            {isStuff(planes) && <h2>Tasks With Assignment {id}</h2>}
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

export default TaskAssignment2TaskList;