import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "./Topbar.css";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
  
    return (
      <Box display="flex" justifyContent="right" p={2}>
        {/* ICONS */}
        <Box display="flex" 
        sx={{
          position: "fixed",
          background: theme.gradients.comps,
          border: "none",
          color: theme.palette.text.primary,
          borderRadius: "10px",
          boxShadow: "0 1px 5px 1px rgba(0, 0, 0, 0.17)"
        }}
      >

          <IconButton className="topbar-menu-item" color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton className="topbar-menu-item" color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton className="topbar-menu-item" color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton className="topbar-menu-item" color="inherit">
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };
  
  export default Topbar;