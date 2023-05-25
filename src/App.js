import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Category from "./Pages/Category/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="superapp/" element={<Registration />} />
        <Route path="superapp/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
