const {Link, useHistory} = window.ReactRouterDOM;
import planeService from "../passengers/passenger-service"
const { useState, useEffect } = React;

const goBack = () => {
    history.back()
};

const PlaneList = () => {
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        planeService.findAllUsers()
            .then(planes => setPlanes(planes))
    return(
        <div>
            <h2>Planes</h2>
            <button onClick={() => history.push("/planes/new")}>
                Add Plane
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
                                      <Link to={`/planes/${user.id}`}>
                                          {user.id},
                                          {user.name},
                                      </Link>
                                  </li>)
                }
            </ul>

        </div>

    )
}

export default PlaneList;