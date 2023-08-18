import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";

import classes from "./AuthLinks.module.scss";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row" gap={2} className={classes.wrapper}>
      <Button component={Link} to={Paths.SIGNUP} color="inherit">
        Register
      </Button>
      <Button component={Link} to={Paths.SIGNIN} color="inherit">
        Signin
      </Button>
    </Stack>
  );
};

export default AuthLinks;
