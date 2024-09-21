import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx"


function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
