import "./App.css";
import NavBar from "./components/navBar/index";
import SideBar from "./components/sideBar/index";
import HomePage from "./page/home-page/index";

function App() {
  return (
    <div className="bg-white-800">
      <NavBar />

      <div className="flex">
        <SideBar />
        <div className="bg-green-500 w-full">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
