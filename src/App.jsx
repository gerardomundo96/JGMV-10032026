import "./App.css";

import ClientePage from "./pages/Cliente/ClientePage";
import CreateClientePage from "./pages/Cliente/CreateClientePage";
import EditClientePage from "./pages/Cliente/EditClientePage";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Listar clientes */}
        <Route path="/clientes" element={<ClientePage/>} />
        {/* Crear cliente */}
        <Route path="/clientes/create" element={<CreateClientePage />} />
        {/* Editar cliente */}
        <Route path="/clientes/edit/:id" element={<EditClientePage />} />
        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/clientes" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;