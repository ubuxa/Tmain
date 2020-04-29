import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './navbar/Navbar';
import Signin from './signin/Signin';
import Contact from './contact/Contact';
import More from './more/More';
import Signup from './signup/Signup';
import Folder from './folder/Folder';
import DrawerContainer from './drawer/DrawerContainer';
import FolderDashboard from './folderdashboard/FolderDashboard';

export default function LandingPage() {
  return (
    <Router>
      <div>

        <main>
          <Route exact path="/" component={Signin} />
          <Route path="/signin" component={Signin} />
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={Signup} />
          <Route path="/folder" component={Folder} />
          <Route path="/folderdashboard" component={FolderDashboard} />
          <Route path="/more" component={More} />
        </main>
      </div>
    </Router>
  );
}
