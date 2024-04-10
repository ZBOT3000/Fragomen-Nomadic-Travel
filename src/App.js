import NavBar from "./components/navBar/index";
import SideBar from "./components/sideBar/index";
import HomePage from "./pages/home-page/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-white-800">
      <NavBar />
      <Router>
        <div className="flex">
          <SideBar />
          <div className="bg-main-blue w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
