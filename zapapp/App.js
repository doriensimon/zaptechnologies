import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/home/home.jsx";
import Login from "./views/login/login.jsx";
import Register from "./views/register/register.jsx";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FAD02C",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#373C3C',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="grad">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}