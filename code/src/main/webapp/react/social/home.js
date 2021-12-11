const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const Home = () => {
    const history = useHistory()
    return (
        <div>
            <h2>Logan and Duke's 5200 Project!</h2>
            <p>Choose a class to get ya CRUD on.</p>
            <button onClick={() => history.push("/users")}>
                Users
            </button>
            <button onClick={() => history.push("/passengers")}>
                Passengers
            </button>
            <button onClick={() => history.push("/planes")}>
                Planes
            </button>
            <button onClick={() => history.push("/Tickets")}>
                Tickets
            </button>
            <button onClick={() => history.push("/employees")}>
                Employees
            </button>
            <button onClick={() => history.push("/trips")}>
                Trips
            </button>
            <button onClick={() => history.push("/tasks")}>
                Tasks
            </button>
        </div>
    )
};

export default Home;