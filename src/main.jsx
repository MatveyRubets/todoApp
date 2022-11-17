import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/list",
		element: <ListPage />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
