import { Layout ,IntroduceLayout} from "layout";
import CategoryLayout from "layout/category-layout/CategoryLayout";
import { paths } from "lib/constants";
import { GuestHome, Home } from "pages";
import CreateFeed from "pages/admin/CreateFeed";
import ThongBao from "pages/guest/category/ThongBao";
import DangKyThi from "pages/guest/DangKyThi";
import ChucNangNhiemVu from "pages/guest/introduce/ChucNangNhiemVu";
import DoiNguNhanSu from "pages/guest/introduce/DoiNguNhanSu";
import GiangVien from "pages/guest/introduce/GiangVien";
import GioiThieuTrungTam from "pages/guest/introduce/GioiThieuTrungTam";
import SoDoToChuc from "pages/guest/introduce/SoDoToChuc";
import TraCuuChungChi from "pages/guest/TraCuuChungChi";
import { lazy } from "react";

const routes = [
  {
    path: ["/admin", '/academy'],
    component: Layout,
    routes: [
      {
        path: paths.Admin,
        exact: true,
        component: lazy(() => import("pages/admin/Home")),
      },
      {
        path: `${paths.Admin}/new`,
        exact: true,
        component: CreateFeed
      }
    ],
  },
  {
    path: "/gioi-thieu-trung-tam",
    component: IntroduceLayout,
    routes: [
      {
        path: '/gioi-thieu-trung-tam',
        exact: true,
        component: GioiThieuTrungTam,
      },
      {
        path: '/gioi-thieu-trung-tam/so-do-to-chuc',
        exact: true,
        component: SoDoToChuc,
      },
      {
        path: '/gioi-thieu-trung-tam/chuc-nang-nhiem-vu',
        exact: true,
        component:ChucNangNhiemVu
      },
      {
        path: '/gioi-thieu-trung-tam/doi-ngu-nhan-su',
        exact: true,
        component: DoiNguNhanSu
      },
      {
        path: '/gioi-thieu-trung-tam/giang-vien',
        exact: true,
        component:GiangVien
      }
    ]
  },
  {
    path: "/category",
    component: CategoryLayout,
    routes: [
      {
        path: '/category/thong-bao',
        exact: true,
        component: ThongBao,
      }
    ]
  },
  {
    path: "/tra-cuu-chung-chi",
    exact: true,
    component: TraCuuChungChi
  },
  {
    path: "/dang-ky-thi",
    exact: true,
    component: DangKyThi
  },
  {
    path: '/',
    component: GuestHome,
  },
  {
    path: "*",
    component: Home,
  }
];

export default routes;
