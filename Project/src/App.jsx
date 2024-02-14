import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import authService from "./appwrite/auth";
import { logIn, logout } from "./Store/AuthSlice";
import { Footer, Header } from "./Components/Index";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logIn({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log("Error in login , app.js");
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className=" min-h-screen  flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
