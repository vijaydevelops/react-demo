// imperative
// usually avoided in REACT
/*
const h1 = document.createElement("h1");
h1.textContent = "Hi there";
document.getElementById("root").append(h1)
// console.log(h1)
*/

/* composable - big part built from or composed from small chunks */
const MainContent = function () {
    return <p>This is main content</p>
}

const page = (
    <nav>
        <h1>Header BrandCom</h1>
        <p>Described here...</p>
        <MainContent />
    </nav>
);
// console.log(page)  POJO, not DOM element
// JS XML
// declarative
// jsx element should have children under a single parent node
ReactDOM.render(
    navbar,
    document.getElementById("root")
);