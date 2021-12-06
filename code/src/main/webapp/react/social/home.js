const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const Home = () => {
    const history = useHistory();
    return (
        <div>
            <h2>Logan and Duke's 5200 Project!</h2>
            <p>Choose a class to get ya CRUD on.</p>
            <button>
                Passenger
            </button>
            <button>
                Ticket
            </button>
            <button>
                Plane
            </button>
        </div>
    )
};

export default Home;