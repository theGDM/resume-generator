import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/not_found/NotFound";


const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer progressClassName="toastProgress"
          bodyClassName="toastBody" position="top-right" autoClose={5000} />
        <div className="app">
          <main className="content">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
