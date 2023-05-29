import { HashRouter, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Category from "./Pages/Category/Category";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
