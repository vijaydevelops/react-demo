import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => (
    <nav>
        <img src="/images/react-logo.png" alt="react logo" width="40px" />
    </nav>
);

const block = (<div>
    <Navbar />
    <h1>Fun Facts about React</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterpise apps, including mobile apps</li>
    </ul>
</div>)

ReactDOM.render(
    block,
    document.getElementById("root")
);
