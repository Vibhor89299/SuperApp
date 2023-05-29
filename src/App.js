import { HashRouter, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Registration/Registration";
import Category from "./Pages/Category/Category";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
