import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./store";
import { validateConfig } from "./validation/configValidation";

validateConfig();

const defaultTheme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <App />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
