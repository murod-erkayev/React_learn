import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import App from "../App";
import Students from "../logs/students";
const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
          <Route path="student" element={<Students />} />
      </Route>
    )
  );

  return <RouterProvider router={router}/>
};

export default Router;
