import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

// components and pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./registration/register";
import LogIn from "./registration/LogIn";
import About from "./pages/About";
import Cart from "./components/Cart";
import Wishlist from "./pages/Wishlist";
import UserList from "./registration/UserList";
import Profile from "./components/Profile";
import ProductList from "./pages/ProductList";

// Context API
import { CartProvider } from "./contextAPI/CartContext";
import { WishlistProvider } from "./contextAPI/WishlistContext";
import { AuthProvider } from "./contextAPI/AuthContext";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import CheckoutPage from "./pages/CheckoutPage";
import { ProductProvider } from "./contextAPI/ProductContext";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import { ContactProvider } from "./contextAPI/ContactContext";
import Error from "./pages/Error";

// Layout component
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  // create a router with routes from the elements
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />}></Route> */}
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>{" "}
          {/* حماية الصفحة الرئيسية */}
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          {/* <Route path="/Profile" element={<Profile />}></Route> */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>{" "}
          {/* حماية صفحة Profile */}
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/productlist" element={<ProductList />}></Route>
          <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
          {/* <Route path="/error" element={<Error errorType="server" />}></Route> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Route>
    )
  );
  return (
    // wrap the app with the cart provider component to provide cart state and methods to all components
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <ProductProvider>
            <ContactProvider>
            <RouterProvider router={router} />
            </ContactProvider>
          </ProductProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
