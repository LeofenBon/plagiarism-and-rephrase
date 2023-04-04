import Landing from "./pages/Landing";
import { Routes, Route } from "@solidjs/router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Landing} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </>
  );
}

export default App;
