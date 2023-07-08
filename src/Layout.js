import React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import Footer from "./Footer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import FormComponent from "./FormComponent";
import DataPage from "./DataPage";
import MyComponent from "./MyComponent";
import MyReackHookForm from "./MyReackHookForm";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Box
          component="nav"
          sx={{
            width: 250,
            flexShrink: 0,
            backgroundColor: "#f0f0f0",
            overflowY: "auto", // 스크롤 추가
            maxHeight: "100vh", // 메뉴바영역의 최대 높이 화면의 세로로 설정
          }}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="회원가입" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="로그인" />
            </ListItem>
            <Link to="/componentPage">
              <ListItem button>
                <ListItemIcon>
                  <LocalAtmIcon />
                </ListItemIcon>
                <ListItemText primary="교정페이지" />
              </ListItem>
            </Link>
          </List>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            pt: 3,
            pb: 2,
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/data/:data" element={<DataPage />} />
            <Route path="/componentPage" element={<MyComponent />} />
            <Route path="/useHookForm" element={<MyReackHookForm />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
