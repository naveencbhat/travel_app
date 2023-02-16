import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

export default makeStyles((theme) => ({
  title: {
    display: { xs: "none", sm: "block", md: "none" },
  },
  search: {
    position: "relative",
    borderRadius: 5,
    backgroundColor: alpha("#1976d2", 0.15),
    "&:hover": { backgroundColor: alpha("#1976d2", 0.25) },
    paddingLeft: 15,
    marginLeft: 5,
    marginRight: 2,
    width: "100%",
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    padding: 2,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
