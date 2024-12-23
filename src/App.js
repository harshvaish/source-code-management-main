// // App.js
// import React from 'react';
// import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/authContextProvider';
// import Dashboard from './pages/components/Dashboard';
// import LoginPage from './pages/components/LoginPage';
// import ProtectedRoute from './protectedRoute';


// const App = () => {
//     return (
//       <AuthProvider>
//         <Router>
//           <Routes>
//             {/* Public Route for Login */}
//             <Route path="/login" element={<LoginPage />} />
  
//             {/* Protected Route for Home */}
//             <Route
//               path="/home"
//               element={
//                 <ProtectedRoute element={<Dashboard />} />
//               }
//             />
  
//             {/* Default redirect to Home */}
//             <Route path="/" element={<Navigate to="/dashboard" />} />
//           </Routes>
//         </Router>
//       </AuthProvider>
//     );
//   };
  
//   export default App;


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routeConfig } from './RoutesConfig';  // Your route configuration file
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'; // Backend for handling drag-and-drop


function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
console.log(isLoggedIn, "isLoggedIn");
  return (
    <DndProvider backend={HTML5Backend}>

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
    </DndProvider>

  );
}

export default App;
