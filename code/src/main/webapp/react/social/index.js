import PassengerList from "./passengers/passenger-list";
import PassengerFormEditor from "./passengers/passenger-form-editor";
import PlaneList from "./planes/plane-list";
import PlaneFormEditor from "./planes/plane-form-editor";
import TicketList from "./tickets/ticket-list";
import TicketFormEditor from "./tickets/ticket-form-editor";
import UserList from "./users/user-list";
import Home from "./home";
import UserFormEditor from "./users/user-form-editor";
import EmployeeList from "./employees/employee-list";
import EmployeeFormEditor from "./employees/employee-form-editor";
import TripList from "./trips/trip-list";
import TripFormEditor from "./trips/trip-form-editor";
import TaskList from "./tasks/task-list";
import TaskFormEditor from "./tasks/task-form-editor";
import TaskAssignmentList from "./taskAssignments/task-assignment-list";
import TaskAssignmentFormEditor from "./taskAssignments/task-assignment-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/home", "/"]} exact={true}>
                    <Home/>
                </Route>
                <Route path="/passengers" exact={true}>
                    <PassengerList/>
                </Route>
                <Route path="/passengers/:id" exact={true}>
                    <PassengerFormEditor/>
                </Route>
                <Route path="/users" exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path="/tickets" exact={true}>
                    <TicketList/>
                </Route>
                <Route path="/tickets/:id" exact={true}>
                    <TicketFormEditor/>
                </Route>
                <Route path="/planes" exact={true}>
                    <PlaneList/>
                </Route>
                <Route path="/planes/:id" exact={true}>
                    <PlaneFormEditor/>
                </Route>
                <Route path="/employees" exact={true}>
                    <EmployeeList/>
                </Route>
                <Route path="/employees/:id" exact={true}>
                    <EmployeeFormEditor/>
                </Route>
                <Route path="/trips" exact={true}>
                    <TripList/>
                </Route>
                <Route path="/trips/:id" exact={true}>
                    <TripFormEditor/>
                </Route>
                <Route path="/tasks" exact={true}>
                    <TaskList/>
                </Route>
                <Route path="/tasks/:id" exact={true}>
                    <TaskFormEditor/>
                </Route>
                <Route path="/task-assignments" exact={true}>
                    <TaskAssignmentList/>
                </Route>
                <Route path="/task-assignments/:id" exact={true}>
                    <TaskAssignmentFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
