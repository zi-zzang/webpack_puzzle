import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/reducer"
import App from "./App"
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App/>
    </Provider>
);
