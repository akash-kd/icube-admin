import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { routes } from './routes/PublicRoute';
import { AuthenticatedRedirects } from './routes/AuthenticatedRedirects';

function App() {
  return (
    <React.Fragment>
      <div className="min-h-screen block max-h-screen bg-primary-gray-100">

        <Router>
          <Routes>

            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                element={route.element}
              />
            ))}

          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;