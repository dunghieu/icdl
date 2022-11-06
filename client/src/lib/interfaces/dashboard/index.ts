

interface CommonProps {
  open?: boolean;
  handleToggleDrawer: () => void;
  drawerwidth: number;
}

export interface HeaderProps extends CommonProps {}

export interface DrawerProps extends CommonProps {}

export interface DashBoardProps {
  route?: any;
}
