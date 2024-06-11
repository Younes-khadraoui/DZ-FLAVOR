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

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/recipes"
            element={
              <div>
                <HeaderSearch />
                <Recipes />
              </div>
            }
          />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route
            path="/account"
            element={<ProtectedRoute element={<Account />} />}
          />
          <Route
            path="/favourites"
            element={<ProtectedRoute element={<Account />} />}
          />
          <Route
            path="/purchases"
            element={<ProtectedRoute element={<Account />} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                adminOnly
                element={
                  <div>
                    <HeaderSearch />
                    <Dashboard />
                  </div>
                }
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
