import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./components/account/Account";
import Suggestions from "./components/suggestions/Suggestions";
import Recipes from "./components/recipes/Recipes";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";
import HeaderSearch from "./components/header/HeaderSearch";
import RecipeDetails from "./components/recipes/RecipeDetails";
import Favourites from "./components/favourites/Favourites";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/recipes"
            element={
              <div className="min-h-screen flex flex-col ">
                <HeaderSearch />
                <Recipes />
              </div>
            }
          />
          <Route
            path="/suggestions"
            element={
              <div className="min-h-screen flex flex-col ">
                <Header />
                <Suggestions />
              </div>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute
                element={
                  <div className="min-h-screen flex flex-col ">
                    <Header />
                    <Account />
                  </div>
                }
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <ProtectedRoute
                element={
                  <div className="min-h-screen flex flex-col ">
                    <Header />
                    <Favourites />
                  </div>
                }
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute
                element={
                  <div className="min-h-screen flex flex-col ">
                    <Header />
                    <Cart />
                  </div>
                }
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                adminOnly
                element={
                  <div className="min-h-screen flex flex-col ">
                    <HeaderSearch />
                    <Dashboard />
                  </div>
                }
              />
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <div className="min-h-screen flex flex-col ">
                <Header />
                <RecipeDetails />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
