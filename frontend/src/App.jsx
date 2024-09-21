import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx"
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
