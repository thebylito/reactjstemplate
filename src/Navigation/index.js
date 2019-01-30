import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from '../Screens/HomeScreen';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={HomeScreen} />
    </div>
  </Router>
);

export default AppRouter;
