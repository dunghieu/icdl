import {List, ListSubheader, Typography} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {Basic, Collapsable} from './components';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

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
        id: 'dashboard.candidate',
        title: 'Thí sinh',
        type: 'basic',
        icon: <HomeOutlinedIcon />,
        link: '/admin',
      },
      {
        id: 'dashboard.registration',
        title: 'Nguyện vọng',
        type: 'basic',
        icon: <SchoolOutlinedIcon />,
        link: '/admin/registration',
      },
      {
        id: 'dashboard.feed',
        title: 'Bài viết',
        type: 'basic',
        icon: <SchoolOutlinedIcon />,
        link: '/admin/feed',
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
      {
        id: 'dashboard.room',
        title: 'Phòng thi',
        type: 'basic',
        icon: <MeetingRoomIcon />,
        link: '/admin/room',
      },
      {
        id: 'dashboard.unit',
        title: 'Danh sách bài thi',
        type: 'basic',
        icon: <HistoryEduIcon />,
        link: '/admin/unit',
      },
    ],
  },
  {
    id: 'profile',
    title: 'Shortcut',
    // subtitle: 'Account & settings',
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
        id: 'profile.feed',
        title: 'Tạo bài viết',
        type: 'basic',
        icon: <AddCircleRoundedIcon />,
        link: '/admin/feed/create',
      },
      {
        id: 'profile.exam',
        title: 'Tạo kì thi',
        type: 'basic',
        icon: <AddCircleRoundedIcon />,
        link: '/admin/exam/create',
      },
      {
        id: 'profile.course',
        title: 'Tạo khóa học',
        type: 'basic',
        icon: <AddCircleRoundedIcon />,
        link: '/admin/course/create',
      },
      // {
      //   id: 'profile.signout',
      //   title: 'Đăng xuất',
      //   type: 'basic',
      //   icon: <ExitToAppOutlinedIcon />,
      //   link: '/sign-out',
      // },
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
