
import "./App.css";
import Navbar from "./components/NavBar/Nav";
import Router from "./route/Route";
import Mainpage from "./pages/MainPage"
function App() {
  return (
 <div>
      <div className="center-content">
        <Navbar />
      </div>
      <div>
        <Router />
      </div>{" "}
      </div>
  );
}

export default App;
