import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorkerRegistration.register();
