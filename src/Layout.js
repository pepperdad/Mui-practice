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
              <ListItemText primary="배송" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>{" "}
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="환불" />
            </ListItem>
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
          메인 내용~
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
