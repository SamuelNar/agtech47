import "./App.css";
import { Routes, Route } from "react-router-dom";
import Start from "./page/Start";
import Sobrenosotros from "./page/Sobrenosotros";
import Contactos from "./page/Contactos";
import Layout from "./layout/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Start />} />
          <Route path="/SobreNosotros" element={<Sobrenosotros />} />
          <Route path="/Contactos" element={<Contactos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
