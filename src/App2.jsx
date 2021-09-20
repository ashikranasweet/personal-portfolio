import React from 'react';
import HomePage from './portfolio-two/pages/homePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectPage from './portfolio-two/pages/projectPage/ProjectPage';
import Topbar from './portfolio-two/comp/topbar/Topbar';
import './app2.scss';
import ContactPage from './portfolio-two/pages/contactPage/ContactPage';
import Footer from './portfolio-two/comp/footer/Footer';
import Vanila from './portfolio-two/pages/vanilaMini/Vanila';

const App2 = () => {
  return (
    <Router>
      <Topbar />
      <main>
        <Switch>
          <Route path="/vanila/mini" component={Vanila} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App2;
