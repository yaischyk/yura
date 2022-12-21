import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// Routes
import Main from "./routes/Main";
import Task from "./routes/Task";

const router = createBrowserRouter([
    {
        path: "/logs/:key",
        element: <Main/>
    },
    {
        path: "/logs/l/:id",
        element: <Task/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);