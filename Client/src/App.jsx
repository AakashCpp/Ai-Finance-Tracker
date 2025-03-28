import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import UserProvider from "./context/UserContext";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Deshbord/Home";
import Income from "./pages/Deshbord/Income";
import Expence from "./pages/Deshbord/Expence";
import { Toaster } from "react-hot-toast"; //help to give customised notifications

function App() {
  return (
    <>
      <UserProvider>
        <div>
          <Router>
            <Routes>
              <Route path="" element={<Root />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/dashbord" exact element={<Home />} />
              <Route path="/income" exact element={<Income />} />
              <Route path="/expence" exact element={<Expence />} />
            </Routes>
          </Router>
        </div>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "13px",
            },
          }}
        />
      </UserProvider>
    </>
  );
}

export default App;

const Root = () => {
  //check if token(person) present in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  //if authenticate -> redirect to dashbord , otherwise to login page
  return isAuthenticated ? (
    <Navigate to="/dashbord" />
  ) : (
    <Navigate to="/login" />
  );
};
