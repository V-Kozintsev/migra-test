import "./style.scss";

import header from "./components/header.html?raw";

document.getElementById("app").innerHTML = `
    ${header}
`;
