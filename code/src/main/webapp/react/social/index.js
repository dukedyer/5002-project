import PassengerList from "./passengers/passenger-list";
import PassengerFormEditor from "./passengers/passenger-form-editor";
import PlaneList from "./planes/plane-list";
import PlaneFormEditor from "./planes/plane-form-editor";
import TicketList from "./tickets/ticket-list";
import TicketFormEditor from "./tickets/ticket-form-editor";
import Home from "./home";
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
            </HashRouter>
        </div>
    );
}

export default App;
