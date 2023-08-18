import { FC, useState } from "react";
import { AppBar, Stack, Toolbar } from "@mui/material";

import { useAppSelector } from "../../hooks/redux";
import { getAuthState } from "../../store/selectors/authSelectors";
import AuthLinks from "../auth-links";
import Navbar from "../navbar";
import AppTitle from "../app-title";
import UserMenu from "../user-menu";
import UserMenuButton from "../user-menu-button";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { isAuth, user } = useAppSelector(getAuthState);

  const toggleUserMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    <AppBar position="absolute" className={classes.header} data-testid="header">
      <Toolbar sx={{ pr: "24px" }}>
        <AppTitle />
        {isAuth && <Navbar />}
        {isAuth ? (
          <UserMenuButton onClick={toggleUserMenu} name={user!.name} />
        ) : (
          <AuthLinks />
        )}
        {menuIsOpen && <UserMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
