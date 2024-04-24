import App from "../App";
import Login from "../pages/login/Login";
import UserCreate from "../pages/user-management/UserCreate";
import Users from "../pages/user-management/Users";

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/users/",
    element: <Users />,
  },
  {
    path: "/create-new-user",
    element: <UserCreate />,
  }
];

export default routes;