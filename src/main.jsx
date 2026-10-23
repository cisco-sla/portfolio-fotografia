import { StrictMode } from "react"; //Componente que ayuda a detectar errores.
import { createRoot } from "react-dom/client"; //Componente que crea la raiz del proyecto.
import { HashRouter } from "react-router"; //Activa la navegación entre páginas.
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
