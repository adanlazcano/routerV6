import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Categories from "../pages/Categories";
import NotFound from "../pages/404";
import Layout from "../layout";
import PrivateRoute from "./PrivateRoute";
import Payments from "../pages/Payments";
import Login from "../pages/login";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route
            path="/"
            exact
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/contact"
            exact
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/about"
            exact
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/profile/:username"
            exact
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />

          <Route
            path="/categories"
            exact
            element={
              <Layout>
                <Categories />
              </Layout>
            }
          />

          <Route
            exact
            path="/payments"
            element={
              <Layout>
                <Payments />
              </Layout>
            }
          />

          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default Index;
