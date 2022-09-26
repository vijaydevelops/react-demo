const OtherNav = (
    <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
)

const page = (
    <nav>
        <h1>Header BrandCom</h1>
        <OtherNav />
    </nav>
);

ReactDOM.render(
    navbar,
    document.getElementById("root")
);