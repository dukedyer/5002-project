const {Link, useHistory, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = (id) => fetch(`${"http://localhost:8080/api/task2task-assignments"}/${id}`)
    .then(response => response.json());

const goBack = () => {
    history.back()
};

function isStuff(stuff) {
    return stuff.length > 0
}

const Task2TaskAssignmentList = () => {
    const {id} = useParams()
    console.log(id);
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
            {isStuff(planes) && <h2>Task {id}'s Assignments</h2>}
            <ul className="list-group">
                {
                    planes.map(user =>
                                   <li className="list-group-item"
                                       key={user.id}>
                                       <Link to={`/task-assignments/${user.id}`}>
                                           ID: {user.id},
                                           Task: {user.task},
                                           Assignment Date: {user.date}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default Task2TaskAssignmentList;