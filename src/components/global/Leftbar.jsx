import React, { useState, useContext } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Box, Typography, useTheme, IconButton} from "@mui/material";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import "./Leftbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Leftbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div style={{ display: "flex"}}>
      <Sidebar
        backgroundColor={theme.gradients.fancy}
        style={{
          position: "fixed",
          //top: 15,
          //left: 10,
          width: collapsed ? 80 : 280,
          height: '100%',
          //height: "calc(100% - 30px)",
          background: theme.gradients.fancy,
          color: "rgb(227, 227, 227)",
          border: "none",
          //borderRadius: "10px",
          overflow: "hidden",     
          boxShadow: "0 1px 5px 1px rgba(0, 0, 0, 0.24)"
        }}>
        <Menu iconShape="square" menuItemStyles={{button: {marginTop: 8, backgroundColor: 'transparent !important'}}}>
          <MenuItem color="inherit" className="sidebar-menu-item" icon={<MenuOutlinedIcon onClick={() => {collapseSidebar();}}/>}>
                <Typography variant="h3">
                  ВНИИ "ЦЕНТР"
                </Typography>
          </MenuItem>
          <MenuItem component={<Link to="/" className="link" />} className="sidebar-menu-item" icon={<HomeOutlinedIcon/>}> <Typography variant="h5"> Главная </Typography></MenuItem>
          <MenuItem component={<Link to="/requests" className="link" />} className="sidebar-menu-item" icon={<RequestPageOutlinedIcon />}> <Typography variant="h5"> Заявки на субсидии </Typography></MenuItem>
          <MenuItem component={<Link to="/subsidies" className="link" />} className="sidebar-menu-item" icon={<RequestQuoteOutlinedIcon />}><Typography variant="h5"> Субсидии </Typography></MenuItem>
          <MenuItem component={<Link to="/organizations" className="link" />} className="sidebar-menu-item" icon={<FactoryOutlinedIcon />}> <Typography variant="h5"> Организации </Typography></MenuItem>
          <MenuItem component={<Link to="/dashboards" className="link" />} className="sidebar-menu-item" icon={<SsidChartOutlinedIcon />}><Typography variant="h5"> Аналитика </Typography></MenuItem>
          <MenuItem component={<Link to="/reports" className="link" />} className="sidebar-menu-item" icon={<FactCheckOutlinedIcon />}> <Typography variant="h5"> Отчетность </Typography></MenuItem>
          <MenuItem component={<Link to="/autorization" className="link" />} className="sidebar-menu-item" icon={<LoginOutlinedIcon />}> <Typography variant="h5"> Авторизация </Typography></MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Leftbar;

