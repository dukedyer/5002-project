const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = () => fetch("http://localhost:8080/api/trips")
    .then(response => response.json());

const goBack = () => {
    history.back()
};

const TripList = () => {
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        findAllPlanes()
    }, [])
    const findAllPlanes = () =>findAllPlanes2().then(planes => setPlanes(planes))
    return(
        <div>
            <h2>Trips</h2>
            <button onClick={() => history.push("/trips/new")}>
                Add Trip
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
                                       <Link to={`/trips/${user.id}`}>
                                           ID: {user.id},
                                           Origin: {user.origin}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default TripList;