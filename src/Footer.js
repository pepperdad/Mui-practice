import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 3, mt: "auto" }}>
      {/* // 푸터를 맨 아래로 이동시키는 역할 */}
      <Typography variant="body2" color="textSecondary" align="center">
        My App &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
