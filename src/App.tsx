import "./App.css";
import MobileView from "./views/MobileView";
import Desktop from "./views/Desktop";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

function AppNav() {
  return (
    <div className="aspire-app-nav">
      <nav>
        <ul>
          <li>
            <Link to={`mobile`}>Mobile View</Link>
          </li>
          <li>
            <Link to={`web`}>Web View</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppNav />,
  },
  {
    path: "/mobile",
    element: <MobileView />,
  },
  {
    path: "/web",
    element: <Desktop />,
  },
]);

function App() {
  return (
    <>
      <div className="aspire-app">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
