import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./ui/GlobalStyles";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
