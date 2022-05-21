import React, { useState, Component } from "react";
import ReactDOM, { render } from "react-dom";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,     // Switch,
    Route,
    Link,
    Navigate    // Redirect
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

                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    {
                                        user.isUserAuthenticated ?
                                            <Navigate to="/current-demo" /> :
                                            <Navigate to="/context-demo" />
                                    }
                                </>
                            }
                        />

                        {/*<Route exact path="/contextdemo" component={ContextDemo} /> */}
                        <Route
                            exact
                            path="/context-demo"
                            element={<ContextDemo />}
                        />
                        <Route
                            exact
                            path="/current-demo"
                            element={demo1}
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}


const root = createRoot(document.getElementById('root'));
// Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
// Uncaught TypeError: react_dom_client__WEBPACK_IMPORTED_MODULE_2___default(...) is not a function at Module../src/index.js
root.render(<App />);

/*
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17.
*/

