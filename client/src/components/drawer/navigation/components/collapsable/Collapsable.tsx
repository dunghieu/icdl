import React, { useState } from 'react';
import { NavigationItem } from '../../Navigation';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
const Collapsable = (item: NavigationItem) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const {type, id, icon, title} = item;
  if (type !== "collapsable") {
    return(
      <></>
    )
  }
  return (
    <>
      <ListItemButton key={id} onClick={handleClick}>
        <ListItemIcon>
          {icon ? icon : ''}
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children?.map((data: NavigationItem) => (
            <ListItemButton key={data.id} component={Link} to={data?.link} sx={{ pl: 4 }}>
              <ListItemIcon>
                {data.icon ? data.icon : ''}
              </ListItemIcon>
              <ListItemText primary={data.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default Collapsable
