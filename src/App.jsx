import "./App.css";

import ClientesPage from "./pages/clientes/ClientePage";
import CreateClientePage from "./pages/clientes/CreateClientePage";
import EditClientePage from "./pages/clientes/EditClientePage";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Listar clientes */}
        <Route path="/clientes" element={<ClientesPage />} />
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