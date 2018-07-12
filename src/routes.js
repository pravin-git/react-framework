import React from 'react';
import { Router, Route } from 'react-router-dom';
import App from 'App';

export default (
    <Router history={history}>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/login" component={App} />
            <Route path="/register" component={App} />
        </div>
    </Router>
  );
  