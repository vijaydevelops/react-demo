
import React, { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";  // cant resolve error

// Demo - useContext, createContext
// useState - usually at the top of component which requires state

// useful link: 
// destructuring in https://www.w3schools.com/react/react_es6_destructuring.asp

const UserContext = createContext();

export default function ContextDemo() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>

            {/*
                <Component2 user={user} />
            */}
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again updated!`}</h2>
        </>
    );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// render(<App />, document.getElementById("root"));

// error ?
/*
export default function () {
    return <Component1 />;
};
*/

/*
export {
    Component1
};
*/