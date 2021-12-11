import {findPlaneById} from "../users/user-form-editor";

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = (id) => fetch("http://localhost:8080/api/planes")
    .then(response => response.json());

const goBack = () => {
    history.back()
};

const PlaneList = () => {
    const history = useHistory()
    const [planes, setPlanes] = useState([])
    useEffect(() => {
        findAllPlanes()
    }, [])
    const findAllPlanes = (id) =>findAllPlanes2(id).then(planes => setPlanes(planes))
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
                                          ID: {user.id},
                                          Name: {user.name}
                                      </Link>
                                  </li>)
                }
            </ul>

        </div>

    )
}

export default PlaneList;