import { useRoutes } from "react-router-dom";

const AppRouter = () => {
  const routes = useRoutes([{ path: "/", element: <>hello</> }]);

  return routes;
};

export default AppRouter;
