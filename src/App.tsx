import { Route, Routes } from "react-router-dom";
import { Home } from "./import";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin">
          <Route index element />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
