import React from 'react';
import 'materialize-css';
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";

const App = () => {
    const {token, login, logout, userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
  return (
      <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated }}>
          <div className="container">
              <BrowserRouter>
                  {routes}
              </BrowserRouter>
          </div>
      </AuthContext.Provider>
  );
}

export default App;
