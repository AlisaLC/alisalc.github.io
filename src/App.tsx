import "./App.css";
import Landing from "./components/landing/Landing.tsx";
import { Route, Routes } from "react-router-dom";
import { urls } from "./global/variables.ts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;