// import "./App.css";
// import Auth from "./components/login.jsx";
// import ProjectList from "./components/ProjectList";
// import projects from "./assets/exampleProjects.json";
// import CreateProject from "./components/CreateProject";

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CreateDonation from './components/Donations/CreateDonation';
// import DonationList from './components/Donations/DonationList';
// import Header from './components/Layout/Header';


// function App() {
//   return (
//     <>
//     <Auth></Auth>      
//       <h1>Home Page</h1>
//       <ProjectList projects={projects} />
//       <CreateProject/>
//     </>
//   );
// }





// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route exact path="/login">
//           <Login />
//         </Route>
//         <Route exact path="/register">
//           <Register />
//         </Route>
//         <Route exact path="/create-donation">
//           <CreateDonation />
//         </Route>
//         <Route exact path="/donations">
//           <DonationList />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateDonation from './components/Donations/CreateDonation';
import DonationList from './components/Donations/DonationList';

import ProjectList from "./components/ProjectList";
import CreateProject from "./components/CreateProject";
import projects from "./assets/exampleProjects.json";
import "./App.css";
import Login from './components/Donations/DonarLogin';
  
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-donation" element={<CreateDonation />} />
        <Route path="/donations" element={<DonationList />} />
        <Route path="/donor-login" element={<Login />} />
        <Route path="/" element={
          <div>   
      <h1>Home Page</h1>
      <ProjectList projects={projects} />
      <CreateProject/>
          </div>
        } />
      </Routes>
    </Router>
  );
};
export default App;
