import React, { useState } from "react";

import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles";

function Header({ setCoordinates }) {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            World Travel
          </Typography>
          <Box display="flex" width="50%">
            <Typography variant="h6" width="30%" className={classes.title}>
              Explore World
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                ></InputBase>
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
