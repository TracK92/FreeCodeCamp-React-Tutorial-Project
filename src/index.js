import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { StoreProvider } from 'easy-peasy';
import store from './store';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StoreProvider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </StoreProvider>
);

