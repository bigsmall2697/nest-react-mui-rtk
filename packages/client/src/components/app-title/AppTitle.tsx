import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

import { Paths } from "../../routes";

import classes from "./AppTitle.module.scss";

const AppTitle: FC = () => {
  return (
    <Typography
      variant="h6"
      color="inherit"
      className={classes.title}
      noWrap
      component={NavLink}
      to={Paths.HOME}
    >
      React Chat
    </Typography>
  );
};

export default AppTitle;
