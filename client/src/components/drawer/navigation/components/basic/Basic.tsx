import React from 'react';
import { NavigationItem } from '../../Navigation';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Basic = (item: NavigationItem) => {
  const {type, id, link, icon, title} = item;
  if (type !== "basic") {
    return (
      <></>
    )
  }
  return (
    <ListItemButton key={id} component={Link} to={link}>
      <ListItemIcon>
        {icon ? icon : ''}
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  )
}

export default Basic
