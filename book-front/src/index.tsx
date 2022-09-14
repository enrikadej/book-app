
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as HashRouter } from 'react-router-dom';
import { App } from "./App";
import 'bulma/css/bulma.min.css';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);