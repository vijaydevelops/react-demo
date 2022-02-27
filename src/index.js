import React from "react";  // for recognizing jsx
import ReactDOM from "react-dom";

const navbar = (
    <nav>
        <h1>Header BrandCom</h1>
    </nav>
);

// jsx is converted into dom elements ....... here
ReactDOM.render(
    navbar,
    document.getElementById("root")
);

// document.getElementById("root").append(navbar)
// does not work, because navbar is POJO and not a dom element to be appended