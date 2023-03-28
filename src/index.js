import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css'
import PostAProject from './PostAProject';
import ProjectListing from './ProjectListing';
import SignUpPage from './SignUpPage'
import SignUpForm from './SignupForm';
import ProjectDetails from './ProjectDetails'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PostAProject /> */}
    {/* <ProjectListing/> */}
    <ProjectDetails />
    {/* <SignUpPage /> */}
    {/* <SignUpForm/> */}
  </React.StrictMode>
);
reportWebVitals();

