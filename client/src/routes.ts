import PaymentForm from "components/common/stripe/PaymentForm";
import FeedDetails from "components/FeedDetails";
import DanhSachDuThi from "components/pdf/DanhSachDuThi";
import { Layout ,IntroduceLayout} from "layout";
import CategoryLayout from "layout/category-layout/CategoryLayout";
import TraCuuLayout from "layout/tracuu-layout/TraCuuLayout";
import { paths } from "lib/constants";
import { GuestHome, Home } from "pages";
import CreateCourse from "pages/admin/CreateCourse";
import CreateExam from "pages/admin/CreateExam";
import CreateFeed from "pages/admin/CreateFeed";
import Login from "pages/admin/login/Login";
import Feed from "pages/guest/category/Feed";
import DangKyThi from "pages/guest/DangKyThi";
import ChucNangNhiemVu from "pages/guest/introduce/ChucNangNhiemVu";
import DoiNguNhanSu from "pages/guest/introduce/DoiNguNhanSu";
import GiangVien from "pages/guest/introduce/GiangVien";
import GioiThieuTrungTam from "pages/guest/introduce/GioiThieuTrungTam";
import SoDoToChuc from "pages/guest/introduce/SoDoToChuc";
import TraCuuChungChi from "pages/guest/TraCuuChungChi";
import TraCuuDanhSachOnTable from "pages/guest/TraCuuDanhSachOnTable";
import TraCuuDanhSachThiTable from "pages/guest/TraCuuDanhSachThiTable";
import TraCuuKetQuaThiTable from "pages/guest/TraCuuKetQuaThiTable";
import TraCuuKetNguyenVongTable from "pages/guest/TraCuuNguyenVongTable";
import { lazy } from "react";

export const adminRoutes = [
  {
    path: paths.Admin,
    component: Layout,
    key: "admin",
    routes: [
      {
        path: paths.Admin,
        exact: true,
        component: lazy(() => import("pages/admin/Home")),
      },
      {
        path: `${paths.Admin}/registration`,
        exact: true,
        component: lazy(() => import("pages/admin/Registration")),
      },
      {
        path: `${paths.Admin}/candidate`,
        exact: true,
        component: lazy(() => import("pages/admin/Candidate")),
      },
      {
        path: `${paths.Admin}/course`,
        exact: true,
        component: lazy(() => import("pages/admin/Course")),
      },
      {
        path: `${paths.Admin}/exam`,
        exact: true,
        component: lazy(() => import("pages/admin/Exam")),
      },
      {
        path: `${paths.Admin}/room`,
        exact: true,
        component: lazy(() => import("pages/admin/Room")),
      },
      {
        path: `${paths.Admin}/unit`,
        exact: true,
        component: lazy(() => import("pages/admin/Unit")),
      },
      {
        path: `${paths.Admin}/feed/create`,
        exact: true,
        component: CreateFeed
      },
      {
        path: `${paths.Admin}/exam/create`,
        exact: true,
        component: CreateExam
      },
      {
        path: `${paths.Admin}/course/create`,
        exact: true,
        component: CreateCourse
      }
    ],
  },
]

export const routes = [
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
    path: "/tra-cuu",
    component: TraCuuLayout,
    routes: [
      {
        path: '/tra-cuu/ket-qua-dang-ky-thi',
        exact: true,
        component: TraCuuDanhSachThiTable,
      },
      {
        path: '/tra-cuu/ket-qua-dang-ky-hoc',
        exact: true,
        component: TraCuuDanhSachOnTable,
      },
      {
        path: '/tra-cuu/ket-qua-thi',
        exact: true,
        component: TraCuuKetQuaThiTable,
      },
      {
        path: '/tra-cuu/nguyen-vong-dang-ky',
        exact: true,
        component: TraCuuKetNguyenVongTable,
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
        component: Feed,
      },
      {
        path: '/category/cac-khoa-hoc',
        exact: true,
        component: Feed,
      },
      {
        path: '/category/thong-bao-cntt-co-ban',
        exact: true,
        component: Feed,
      },
      {
        path: '/category/thong-bao-cntt-nang-cao',
        exact: true,
        component: Feed,
      },
      {
        path: '/category/thong-bao-ic3-mos',
        exact: true,
        component: Feed,
      },
      {
        path: '/category/',
        component: Feed,
      }
    ]
  },
  {
    path: "/news",
    component: CategoryLayout,
    routes: [
      {
        path: '/news/*',
        exact: true,
        component: FeedDetails,
      },
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
    path: '/checkout/:id/:secret',
    component: PaymentForm,
    exact: true,
  },
  {
    path: '/test',
    component: DanhSachDuThi,
    exact: true,
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

