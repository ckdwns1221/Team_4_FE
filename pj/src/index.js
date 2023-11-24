import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main/Main';
import WriteScrap from './pages/WriteScrap';
import TypeSelect from './pages/TypeSelect/TypeSelect';
import ArticlesList from './pages/ArticlesList/ArticlesList';
import SearchPage from './pages/SearchPage/SearchPage';
import Mypage from './pages/Mypage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/WriteScrap",
        element: <WriteScrap />,
      },
      {
        path: "/:category/*",
        element: <TypeSelect />,
      },
      {
        path: "/:category/:type",
        element: <ArticlesList />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);