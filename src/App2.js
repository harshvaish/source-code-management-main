import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routeConfig } from './RoutesConfig';  // Your route configuration file

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
console.log(isLoggedIn, "isLoggedIn");
  return (
    <Router>
      <Routes>
        {routeConfig.map((route, index) => {
          // Check if the route is protected and the user is not logged in
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            );
          })}
      </Routes>
    </Router>
  );
}

export default App;
