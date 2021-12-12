const {Link, useHistory, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = (id) => fetch(`${"http://localhost:8080/api/ticket2trips"}/${id}`)
    .then(response => response.json());

const goBack = () => {
    history.back()
};

function isStuff(stuff) {
    return stuff.length > 0
}

const Ticket2TripsList = () => {
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
            {isStuff(planes) && <h2>Trips With Ticket {id}</h2>}
            <ul className="list-group">
                {
                    planes.map(user =>
                                   <li className="list-group-item"
                                       key={user.id}>
                                       <Link to={`/trips/${user.id}`}>
                                           ID: {user.id},
                                           Origin: {user.origin},
                                           Destination: {user.destination}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default Ticket2TripsList;