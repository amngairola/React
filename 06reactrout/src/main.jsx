import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home, ContactUs, About, User, Github, githubInfo } from "./Components";

//way 1 or routing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <ContactUs /> },
//     ],
//   },
// ]);

// way 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="github" element={<Github />} loader={githubInfo} />
      //loader={githubInfo}: This part is less common in standard React Router
      usage. It seems like a custom property named loader is being used, and
      it's assigned the value of githubInfo. The term "loader" is typically
      associated with data loading or fetching. It suggests that githubInfo
      might be used as some form of initial data or configuration when rendering
      the component associated with this route.
      <Route path="user/:id" element={<User />} />
      {/* path="user/:id" indicates that this route is expecting a parameter id when navigating to a path that matches the pattern "/user/someId". */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
