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
              <>
                <HeaderSearch />
                <Recipes />
              </>
            }
          />
          <Route
            path="/suggestions"
            element={
              <>
                <Header />
                <Suggestions />
              </>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute
                element={
                  <div>
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
                  <div>
                    <Header />
                    <Account />
                  </div>
                }
              />
            }
          />
          <Route
            path="/purchases"
            element={
              <ProtectedRoute
                element={
                  <div>
                    <Header />
                    <Account />
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
                  <>
                    <HeaderSearch />
                    <Dashboard />
                  </>
                }
              />
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <div>
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
