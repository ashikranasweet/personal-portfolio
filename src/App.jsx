import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './app.scss';
import Starter from './components/starter/Starter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sections from './screen/sections/Sections';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/sections" component={Sections} />
            <Route path="/" exact component={Starter} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
