import { STUDENT_ROUTER } from './router/student-router.constant';
import { APP_ROUTER_CONST } from './router/app-router.constant';
import { getSSBuildingIcon } from '../../components/common/icons/SSBuildingIcon';
import { getSSHomeIcon } from '../../components/common/icons/SSHomeIcon';
import { KHOA_ROUTER } from './router/khoa-router.constant';

const SideBarConst = [
  {
    name: 'Trang chủ',
    link: APP_ROUTER_CONST.layout.childrens.overview.path,
    roles: APP_ROUTER_CONST.layout.childrens.overview.roles,
    linkParentActive: [],
    icon: getSSBuildingIcon,
    id: "DASHBOARD",
  },
  {
    name: 'Quản lý xe cộ',
    icon: getSSHomeIcon,
    link: '',
    linkParentActive: [],
    childrens: [
      {
        name: 'Danh sách xe cộ',
        icon: 'icon1',
        linkParentActive: [],
        link: STUDENT_ROUTER.childrens.listUser.path,
        roles: STUDENT_ROUTER.childrens.listUser.roles,
        id: "STUDENT_ADD",
      },
      {
        name: 'Thêm mới xe cộ',
        icon: 'icon1',
        linkParentActive: [],
        link: STUDENT_ROUTER.childrens.createUser.path,
        roles: STUDENT_ROUTER.childrens.createUser.roles,
      }
    ],
  },
  {
    name: 'Quản lý Khoa',
    icon: getSSHomeIcon,
    link: '',
    linkParentActive: [],
    childrens: [
      {
        name: 'Danh sách khoa',
        icon: 'icon1',
        linkParentActive: [],
        link: KHOA_ROUTER.childrens.listKhoa.path,
        roles: KHOA_ROUTER.childrens.listKhoa.roles,
        id: "KHOA_ID",
      },
      {
        name: 'Thêm mới khoa',
        icon: 'icon1',
        linkParentActive: [],
        link: KHOA_ROUTER.childrens.createKhoa.path,
        roles: KHOA_ROUTER.childrens.createKhoa.roles,
      }
    ],
  }
];

export default SideBarConst;
