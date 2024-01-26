import "./App.css";
import RegistrationForm from "./components/Registration";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const Navigate = useNavigate();
  return (
    <>
      
        <Routes>
          {/* <Route path="/*" element={<Landing />} /> */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="/"
            element={
              <div
                onClick={() => {
                  Navigate("/register");
                }}
              >
                Hello world
              </div>
            }
          />

          {/* <p className="text-3xl font-bold underline">VISHWAPRENEUR</p> */}
        </Routes>
    </>
  );
}

export default App;
