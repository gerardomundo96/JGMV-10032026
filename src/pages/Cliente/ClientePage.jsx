import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL =
  "https://699126956279728b0153e75c.mockapi.io/api/v1/cliente";

const ClientePage = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchClientes = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(API_URL);
      setClientes(data);
    } catch (error) {
      console.error("Error obteniendo clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar este cliente?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchClientes();
    } catch (error) {
      console.error("Error eliminando cliente:", error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Cargando clientes...</h2>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Gestión de Clientes</h1>
        <button
          style={styles.newButton}
          onClick={() => navigate("/clientes/create")}
        >
          + Nuevo Cliente
        </button>
      </div>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Edad</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id} style={styles.tableRow}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.edad}</td>
                <td>
                  <span
                    style={{
                      ...styles.status,
                      backgroundColor: cliente.activo
                        ? "#d1fae5"
                        : "#fee2e2",
                      color: cliente.activo ? "#065f46" : "#991b1b",
                    }}
                  >
                    {cliente.activo ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td>
                  <button
                    style={styles.editButton}
                    onClick={() =>
                      navigate(`/clientes/edit/${cliente.id}`)
                    }
                  >
                    Editar
                  </button>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDelete(cliente.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "40px",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "38px",
    fontWeight: "bold",
    color: "#1f2937",
  },
  newButton: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#2563eb",
    color: "white",
    textAlign: "left",
  },
  tableRow: {
    borderBottom: "1px solid #e5e7eb",
    color: "#374151", // 🔥 AQUÍ está la corrección del texto
  },
  status: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
  },
  editButton: {
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    marginRight: "6px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ClientePage;
