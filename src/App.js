import Aboutme from './Aboutme';
import './App.css';
import ContactMe from './ContactMe';

import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <Aboutme/>,
  },
  {
    path: "/contact",
    element:<ContactMe/>,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
