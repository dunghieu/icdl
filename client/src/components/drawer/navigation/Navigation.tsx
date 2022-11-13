import {useState} from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  Collapse,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom';
import {Basic, Collapsable} from './components';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

export interface NavigationItem {
  id?: string;
  title?: string;
  subtitle?: string;
  type?: 'aside' | 'basic' | 'collapsable' | 'divider' | 'group' | 'spacer';
  icon?: any;
  link?: string;
  children?: any[];
}

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'dashboard',
    type: 'group',
    children: [
      {
        id: 'dashboard.feed',
        title: 'Bảng tin',
        type: 'basic',
        icon: <HomeOutlinedIcon />,
        link: '/admin',
      },
      {
        id: 'dashboard.candidate',
        title: 'Thí sinh',
        type: 'basic',
        icon: <SchoolOutlinedIcon />,
        link: '/admin/candidate',
      },
      {
        id: 'dashboard.course',
        title: 'Khóa học',
        type: 'basic',
        icon: <LocalLibraryOutlinedIcon />,
        link: '/admin/course',
      },
      {
        id: 'dashboard.exam',
        title: 'Kì thi',
        type: 'basic',
        icon: <LocalLibraryOutlinedIcon />,
        link: '/admin/exam',
      },

      // {
      //   id: 'dashboard.commerce',
      //   title: 'E-Commerce',
      //   type: 'collapsable',
      //   icon: <ShoppingCartOutlinedIcon />,
      //   children: [
      //     {
      //       id: 'dashboard.academy',
      //       title: 'Academy',
      //       type: 'basic',
      //       icon: <SchoolOutlinedIcon />,
      //       link: '/academy',
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 'profile',
    title: 'Profile',
    subtitle: 'Account & settings',
    type: 'group',
    children: [
      // {
      //   id: 'profile.account',
      //   title: 'My account',
      //   type: 'basic',
      //   icon: <PersonOutlineOutlinedIcon />,
      //   link: '/profile',
      // },
      // {
      //   id: 'profile.setting',
      //   title: 'Setting',
      //   type: 'basic',
      //   icon: <SettingsOutlinedIcon />,
      //   link: '/setting',
      // },
      {
        id: 'profile.signout',
        title: 'Đăng xuất',
        type: 'basic',
        icon: <ExitToAppOutlinedIcon />,
        link: '/sign-out',
      },
    ],
  },
];

const navigation = navigationItems.map((data: NavigationItem) => {
  const {id, title, subtitle} = data;
  return (
    <List key={id}>
      <ListSubheader sx={{marginBottom: '10px'}}>
        <Typography variant="caption">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </ListSubheader>
      {data?.children?.map((item: NavigationItem) => (
        <>
          {/* Basic */}
          <Basic {...item} />

          {/* Collapse */}
          <Collapsable {...item} />
        </>
      ))}
    </List>
  );
});

const Navigation = () => {
  return <>{navigation}</>;
};

export default Navigation;
