import React, { useState } from "react";
import { UserProvider } from "./Component/context/UserContext";import LoginPage from "./Component/studyPlanner/Loginpage";
import Dashboard from "./Component/studyPlanner/Dashboard";
import Profile from "./Component/studyPlanner/Profile";
function App() {
  const [page, setPage] = useState("login");
  return (
    <UserProvider>
      {page === "login" && <LoginPage setPage={setPage} />}
      {page === "dashboard" && <Dashboard setPage={setPage} />}
      {page === "profile" && <Profile setPage={setPage} />}
    </UserProvider>
  );
}
export default App;
