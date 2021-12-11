const {Link, useHistory, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = (id) => fetch(`${"http://localhost:8080/api/ticket2passengers"}/${id}`)
    .then(response => response.json());

const goBack = () => {
    history.back()
};

function isStuff(stuff) {
    return stuff.length > 0
}

const Ticket2PassengersList = () => {
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
            {isStuff(planes) && <h2>Passengers With Ticket {id}</h2>}
            <ul className="list-group">
                {
                    planes.map(user =>
                                   <li className="list-group-item"
                                       key={user.id}>
                                       <Link to={`/passengers/${user.id}`}>
                                           ID: {user.id},
                                           Name: {user.firstName} {user.lastName}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default Ticket2PassengersList;