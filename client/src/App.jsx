import {Routes , Route} from "react-router-dom";
import Login from "./Components/login"
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
