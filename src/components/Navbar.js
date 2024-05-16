import React from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { logo } from "../utils/Constants";
import SearchBar from "./SearchBar";
import { UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </NavLink>
      <SearchBar />
      
      {isSignedIn &&  <UserButton afterSignOutUrl="/" />}
    </Stack>
  );
};

export default Navbar;
