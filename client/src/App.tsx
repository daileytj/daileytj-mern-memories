import React from "react";
import "./App.css";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Box,
  Theme,
} from "@mui/material";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import Memories from "./assets/images/memories.png";

const appBarStyles = (theme: Theme) => ({
  borderRadius: 15,
  margin: "30px 0",
  padding: "1rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
});

const headingStyles = {
  color: "rgba(0,183,255, 1)",
};

const imageStyles = {
  marginLeft: "15px",
  height: 60,
};

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" sx={appBarStyles}>
        <Typography variant="h2" align="center" sx={headingStyles}>
          Memories
        </Typography>
        <Box component={"img"} src={Memories} alt="memories" sx={imageStyles} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
