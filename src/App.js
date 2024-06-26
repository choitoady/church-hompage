import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/topNav";
import Home from "./pages/Home";

function Layout() {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
