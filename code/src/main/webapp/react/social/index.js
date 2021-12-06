import PassengerList from "./passengers/passenger-list";
import Home from "./home";
import PassengerFormEditor from "./passengers/passenger-form-editor";
import PlaneList from "./planes/plane-list";
import PlaneFormEditor from "./planes/plane-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path="/homef" exact={true}>
                    <Home/>
                </Route>
                <Route path={["/passengers", "/"]} exact={true}>
                    <PassengerList/>
                </Route>
                <Route path="/passengers/:id" exact={true}>
                    <PassengerFormEditor/>
                </Route>
                <Route path="/planes/" exact={true}>
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
