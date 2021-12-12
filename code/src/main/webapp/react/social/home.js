import styles from './styling/style1.css'

const {Link, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;

const mystyle2 = {
    alignItems: "center",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto"
};

const mystyle = {
    color: "black",
    paddingBottom: "10px"
};

const box = {
    textAlign: "center",
    borderRadius: "20px",
    border: "2px solid rgb(0, 0, 0)",
    padding: "10px",
    marginTop: "15px",
    height: "fit-content"
};

const buttonStyling = {
    backgroundColor: "#e7e7e7",
    color: "black",
    border: "none",
    padding: "10px 20px",
    display: "inline-block",
    margin: "10px",
    borderRadius: "5px"
}

const Home = () => {
    const history = useHistory()
    return (
        <div>
            <div style={box}>
                <div style={mystyle2}>
                    <h2 style={mystyle}>Logan and Duke's 5200 Project!</h2>
                    <p>Choose a class to get ya CRUD on.</p>
                    <button style={buttonStyling} onClick={() => history.push("/passengers")}>
                        Passengers
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/planes")}>
                        Planes
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/Tickets")}>
                        Tickets
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/employees")}>
                        Employees
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/trips")}>
                        Trips
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/tasks")}>
                        Tasks
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/task-assignments")}>
                        Task Assignments
                    </button>
                </div>
            </div>
            <div style={box}>
                <p>Descriptions:</p>
                Will add more here once we do our write ups.
            </div>
        </div>
    )
};

export default Home;