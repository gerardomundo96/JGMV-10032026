import { getCliente, deleteCliente } from "../../services/clienteService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ClientePage = () => {

  const [clientes, setCliente] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchClientes = async () => {
    try {
      setLoading(true);
      const response = await getCliente();
      setCliente(response.data);
    } catch (error) {
      console.error("Error obteniendo clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {

    const confirmed = window.confirm("¿Seguro que deseas eliminar este cliente?");
    if (!confirmed) return;

    try {
      await deleteCliente(id);
      fetchClientes();
    } catch (error) {
      console.error("Error eliminando cliente:", error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  if (loading) {
    return <div>Cargando clientes...</div>;
  }

  return (
    <div>
      <h1>Lista de Clientes</h1>

      <button onClick={fetchClientes}>Refrescar</button>

      <button onClick={() => navigate("/clientes/create")}>
        Agregar Cliente
      </button>

      <br /><br />
      
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellido}</td>
              <td>{cliente.correo}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.estado ? "Activo" : "Inactivo"}</td>
              <td>
                <button
                  onClick={() =>
                    navigate(`/clientes/edit/${cliente.id}`)
                  }
                >
                  Editar
                </button>

                <button
                  onClick={() => handleDelete(cliente.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>

    </div>
  );
};

export default ClientePage;