import "./style.css";

import header from "./components/header.html?raw";

document.getElementById("app").innerHTML = `
    ${header}
`;
