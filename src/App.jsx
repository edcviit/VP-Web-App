import "./App.css";
import RegistrationForm from "./components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/*" element={<Landing />} /> */}
          <Route path="/register" element={<RegistrationForm />} />

          {/* <p className="text-3xl font-bold underline">VISHWAPRENEUR</p> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
