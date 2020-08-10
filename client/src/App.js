import React from 'react';
import 'materialize-css';
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    const routes = useRoutes(false);
  return (
    <div className="container">
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </div>
  );
}

export default App;
