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
                    <button style={buttonStyling} onClick={() => history.push("/employees")}>
                        Employees
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/Tickets")}>
                        Tickets
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/planes")}>
                        Planes
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/trips")}>
                        Trips
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/tasks")}>
                        Tasks
                    </button>
                    <button style={buttonStyling} onClick={() => history.push("/task-assignments")}>
                        Assignments
                    </button>
                </div>
            </div>
            <div style={box}>
                <p>Descriptions:</p>
                <p>Problem: We seek to provide online visibility to the management of an airport.
                    Airports have
                    many job functions essential to their operation, Additionally, airports have a
                    high
                    volume of travelers that demand accurate, accessible data for their travel
                    itinerary. Manual tracking of airport employees and passengers is an almost
                    insurmountable task given the small margin of error that is expected in airport
                    record keeping.</p>
                <p>Solution: Our solution creates a platform for accurate, relational record keeping
                    for of passenger travel and employee job functions within an airport.
                    Specifically,
                    our domain model and web app allows for the creation of passengers, tickets, and
                    planes. Additionally, airport/airplane employees can be given different roles
                    (flight attendant, gate attendant, etc) and assigned job specific tasks.
                    Essentially, our solution seeks to manage the functions within an airport and
                    airplane.</p>
                <p>User: The typical user would be a DBA or project manager working at the airport. This
                    person would have the ability to create tickets for passengers as well as assign
                    specific staff to trips. It is a platform that seeks to enable end-to-end
                    administration of the airport. If a form of authentication/user profiles were
                    implemented in the future, then you may see passengers interacting with the web
                    app to book tickets on specific trips. However, since the web app user profiles
                    were out of scope for this project, access to the tables and record creation was
                    left open. Therefore, the ideal user is one that is allowed to access all the
                    tables and have full visibility into the functions of an airport</p>
                <p>
                    Domain Objects: The Plane represents an airplane. Planes have an serial number
                    and a name associated with them. The passenger's Ticket has a reference to the
                    Plane that they will board for their trip, as expected with a flight. The Task
                    is just that, a task, assigned to an employee that is necessary for the
                    successful completion of a trip. Tasks can be thought of as a checklist that
                    employees must complete. For example a task a flight attendant may have assigned
                    to them is to "perform safety announcements", which are done after boarding a
                    plane, pre-departure.
                </p>
            </div>
        </div>
    )
};

export default Home;