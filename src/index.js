import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Abnormal from './pages/Abnormal';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Registration from './pages/Registration';


import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "dashboard",
    element: <Dashboard/>
  },
  {
    path: "reports",
    element: <Reports/>
  },
  {
    path: "abnormal",
    element: <Abnormal/>
  },
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "registration",
    element: <Registration/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
