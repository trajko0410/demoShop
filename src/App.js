import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import HomePage from "./pages/HomePage";
import Root from "./pages/Root";
import RootShop from "./pages/RootShop";
import Shop, { loader as itemsLoader } from "./pages/ShopPage";
import AboutItemPage, {
  loader as itemAboutLoader,
} from "./pages/AboutItemPage";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOutPage";
import { ShopContextProvider } from "./context/shopContextProvider";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: itemsLoader },
      {
        path: "/shop",
        element: <RootShop />,
        loader: itemsLoader,
        children: [
          {
            index: true,
            path: "",
            element: <Shop />,
            loader: itemsLoader,
          },
          //loader ce router aktivirati tek kada posetimo ovu stranicu!

          {
            path: "/shop/:itemId",
            element: <AboutItemPage />,
            loader: itemAboutLoader,
          },
        ],
      },
      { path: "/checkoutPage", element: <CheckOutPage /> },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
