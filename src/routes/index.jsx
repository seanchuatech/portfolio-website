import App from "../App";
import Login from "../pages/login/Login";
import UserCreate from "../pages/user-management/UserCreate";
import Users from "../pages/user-management/Users";
import RequireAuth from "../components/RequireAuth";
import Missing from "../components/Missing";
import Layout from "../components/Layout";
import PersistLogin from "../components/PersistLogin";
import UserDetails from "../pages/user-management/UserDetails";
import UserEdit from "../pages/user-management/UserEdit";
import UserDelete from "../pages/user-management/UserDelete";
import Projects from "../pages/project/Projects";
import ProjectCreate from "../pages/project/ProjectCreate";
import ProjectDetails from "../pages/project/ProjectDetails";
import ProjectDelete from "../pages/project/ProjectDelete";
import ProjectEdit from "../pages/project/ProjectEdit";

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
            path: "admin",
            element: <Layout />,
            children: [
              {
                path: "users",
                element: <Users />,
              },
              {
                path: "users/create",
                element: <UserCreate />,
              },
              {
                path: "users/details/:id",
                element: <UserDetails />
              },
              {
                path: "users/edit/:id",
                element: <UserEdit />
              },
              {
                path: "users/delete/:id",
                element: <UserDelete />
              },
              {
                path: "projects",
                element: <Projects />,
              },
              {
                path: "projects/create",
                element: <ProjectCreate />,
              },
              {
                path: "projects/details/:id",
                element: <ProjectDetails />
              },
              {
                path: "projects/edit/:id",
                element: <ProjectEdit />
              },
              {
                path: "projects/delete/:id",
                element: <ProjectDelete />
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