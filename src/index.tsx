import "bootstrap/dist/css/bootstrap.min.css";
import "mobx-react-lite/batchingForReactDom";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import StyledToast from "./components/Toast";
import Providers from "./providers";
import ContextProviderComposer from "./providers/contextProviderComposer";
import Router from "./routes";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyles } from "./styles/global";
import axios from 'axios';

const App: React.FC = () => {
  axios.defaults.baseURL = 'http://localhost:8888';

  return (
    <ContextProviderComposer contextProviders={Providers}>
      <GlobalStyles />
      <StyledToast/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ContextProviderComposer>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
