import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Message from './components/Message/Message'
import Chat from './components/Chat/Chat'

const App = () => (
  <Router>
    <Route path="/message" exact component={Message} />
    <Route path="/chat" exact component={Chat} />
  </Router>
);

export default App;