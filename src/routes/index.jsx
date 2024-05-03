import App from "../App";
import Login from "../pages/login/Login";
import UserCreate from "../pages/user-management/UserCreate";
import Users from "../pages/user-management/Users";
import RequireAuth from "../components/RequireAuth";
import Missing from "../components/Missing";
import Layout from "../components/Layout";
import PersistLogin from "../components/PersistLogin";

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
    element: <PersistLogin />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            path: "/admin",
            element: <Layout />,
            children: [
              {
                path: "users",
                element: <Users />,
              },
              {
                path: "create-new-user",
                element: <UserCreate />,
              },
            ]
          },
        ]
      },
    ]
  },
  {
    path: "*",
    element: <Missing />
  }
];

export default routes;