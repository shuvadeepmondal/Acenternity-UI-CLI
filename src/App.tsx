import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Navbar from "./components/utilis/Navbar";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </>
  );
}

export default App;

