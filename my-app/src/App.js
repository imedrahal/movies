
import "./App.css";
import Navbar from "./components/NavBar/Nav";
import Router from "./route/Route";
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
