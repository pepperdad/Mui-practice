import React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ flexGrow: 1, pt: 3, pb: 2 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
