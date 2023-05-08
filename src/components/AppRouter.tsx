import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Khoa from '../features/khoa/danh-sach-khoa/Khoa';
import CreateStudent from '../features/Students/create-student/CreateStudent';
import ListStudent from '../features/Students/List-Student/ListStudent';
import UpdateStudent from '../features/Students/update-student/UpdateStudent';
import Layout from '../layout/Layout';
import { APP_ROUTER_CONST } from '../shared/constants/router/app-router.constant';
import { KHOA_ROUTER } from '../shared/constants/router/khoa-router.constant';
import { STUDENT_ROUTER } from '../shared/constants/router/student-router.constant';
function AppRouter() {
  // const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route
          path={APP_ROUTER_CONST.layout.path}
          element={
            <Layout />
          }
        >
          <Route
            path="/"
            element={<Navigate to="/students/list" replace={true} />}
          ></Route>
          <Route path={STUDENT_ROUTER.childrens.listUser.path}
            element={
              <ListStudent />
            }
          >
          </Route>
          <Route path={STUDENT_ROUTER.childrens.createUser.path}
            element={
              <CreateStudent />
            }
          >
          </Route>
          <Route path={STUDENT_ROUTER.childrens.updateUser.path}
            element={
              <UpdateStudent />
            }
          >
          </Route>
          <Route path={KHOA_ROUTER.childrens.listKhoa.path}
            element={
              <Khoa />
            }
          >
          </Route>
        </Route>

        {/* <Route path={APP_ROUTER_CONST.nonfound.path} element={<NonFound />} />
        <Route path={APP_ROUTER_CONST.login.path} element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default AppRouter;
