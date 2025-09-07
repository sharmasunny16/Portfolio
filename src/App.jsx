import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// Layout with Navbar + Footer
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-6 min-h-screen">
        <Outlet /> {/* yahan pages render honge */}
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // common layout
    children: [
      {
        path: "/", // home page
        element: <HeroSection />,
      },
      {
        path: "/about",
        element: <About />,
      },
       {
        path: "/Projects",
        element: <Projects />,
      },
       {
        path: "/Skills",
        element: <Skills />,
      },
       {
        path: "/Contact",
        element: <Contact />,
      },
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
