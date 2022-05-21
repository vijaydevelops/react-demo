import React, { useState, Component } from "react";
import ReactDOM, { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,     // Routes in v6
    Route,
    Link,
    Redirect    // Navigate in v6
} from "react-router-dom";
import ContextDemo from "./useContextDemo";
import demo1 from "./demo1";

function App() {
    const [user, setUser] = useState({
        name: "Demo",
        isUserAuthenticated: true
    });

    // render() function
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/context-demo">Context Demo</Link>
                        </li>
                        <li>
                            <Link to="/current-demo">Demo 1</Link>
                        </li>
                    </ul>
                    <hr />
                    <br />
                    <br />

                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={_ => (
                                <>
                                    {user.isUserAuthenticated
                                        ? <Redirect to="/current-demo" />
                                        : <Redirect to="/context-demo" />
                                    }
                                </>
                            )
                            }
                        />
                        <Route
                            exact
                            path="/context-demo"
                            // component={_ => <ContextDemo />}
                            component={ContextDemo}
                        />
                        <Route
                            exact
                            path="/current-demo"
                            component={_ => demo1}
                        />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
