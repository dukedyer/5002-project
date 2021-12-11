const {Link, useHistory, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const findAllPlanes2 = (id) => fetch(`${"http://localhost:8080/api/user2tickets"}/${id}`)
    .then(response => response.json());

const goBack = () => {
    history.back()
};

const User2TicketList = () => {
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
            <h2>Employee {id}'s Tickets</h2>
            <ul className="list-group">
                {
                    planes.map(user =>
                                   <li className="list-group-item"
                                       key={user.id}>
                                       <Link to={`/tickets/${user.id}`}>
                                           ID: {user.id},
                                           Boarding Date: {user.boardingTime}
                                       </Link>
                                   </li>)
                }
            </ul>

        </div>

    )
}

export default User2TicketList;