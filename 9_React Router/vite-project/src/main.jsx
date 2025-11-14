import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//1- configurando router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Contact from "./routes/Contact.jsx";
//2- pagina de error
import ErrorPage from "./routes/ErrorPage.jsx";
//3- compomente base
import Home from "./routes/Home.jsx";
//7- rota dinamica
import Products from "./routes/Products.jsx";
//8- nested route
import Info from "./routes/Info.jsx";
//9- search
import Search from "./routes/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    //3- compomente base
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      //7- rota dinamica
      {
        path: "products/:id",
        element: <Products/>
      },
      //8- nested route
      {
        path: "products/:id/info",
        element: <Info/>,
      },
      //9- search
      {
        path: "search",
        element: <Search/>
      },
      //10- redirect
      {
        path: "teste",
        element: <Navigate to="/"/>
      }
    ]
  },
  // {
  //   path: "contact",
  //   element: <Contact/>,
  // },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
