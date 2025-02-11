import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {useProSidebar } from "react-pro-sidebar";
import Topbar from "./components/global/Topbar";
import Leftbar from "./components/global/Leftbar";
import Homepage from "./components/scenes/home/Homepage"
import Requestspage from "./components/scenes/requests/Requestspage"
import Organizationspage from "./components/scenes/organizations/Organizationspage"
import Reportspage from "./components/scenes/reports/Reportspage"
import Dashboardspage from "./components/scenes/dashboards/Dashboardspage"
import Subsidiespage from "./components/scenes/subsidies/Subsidiespage"
import Autorizationpage from "./components/scenes/autorization/Autorizationpage"


function App() {
  const [theme, colorMode] = useMode();
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Leftbar/>
          <main 
            className="content"
            style={{ 
              marginLeft: collapsed ? 80 : 280, 
              transition: "margin-left 0.3s"
            }}>
            <Topbar/>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/requests" element={<Requestspage/>}/>
              <Route path="/organizations" element={<Organizationspage/>}/>
              <Route path="/reports" element={<Reportspage/>}/>
              <Route path="/dashboards" element={<Dashboardspage/>}/>
              <Route path="/subsidies" element={<Subsidiespage/>}/>
              <Route path="/autorization" element={<Autorizationpage/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
