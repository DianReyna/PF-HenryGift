import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ColorContextProvider } from "./utils/mode";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ColorContextProvider>
          <App />
        </ColorContextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
