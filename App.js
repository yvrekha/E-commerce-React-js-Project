import Header from "./components/Header";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import RequireAuth from "./components/RequireAuth";
import AuthProvider from "./components/AuthProvider";
import React from "react";
import ProductDetails from "./components/ProductDetails";


export default function App() {
  const allRoutes = [
    { path: "/login", element: <Login />, isAuth: false },
    { path: "/about", element: <AboutUs />, isAuth: true },
    { path: "/cart", element: <Cart />, isAuth: true },
    { path: "/", element: <Products />, isAuth: true },
    { path: "/addtocart", element: <Cart />, isAuth: true },
    { path: "/product-details/:id", element: <ProductDetails />, isAuth: true }
  ];

  return (
    <AuthProvider>
      <Header />
      <Routes>
        {allRoutes.map((theRoute, position) => {
          return (
            <Route
              key={position}
              path={theRoute.path}
              element={
                theRoute.isAuth ? (
                  <RequireAuth>{theRoute.element}</RequireAuth>
                ) : (
                  theRoute.element
                )
              }
            />
          );
        })}
        {/* <Route path="/login" element={<Login />} />
        <Route
          path="about"
          element={
            <RequireAuth>
              <AboutUs />
            </RequireAuth>
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        /> */}
      </Routes>
    </AuthProvider>
  );
}