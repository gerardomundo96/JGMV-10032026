import { createCliente } from "../../services/clienteService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateClientePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    edad: "",
    activo: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCliente(formData);
      navigate("/clientes");
    } catch (error) {
      console.error("Error creando cliente:", error);
    }
  };

  const styles = {
    page: {
      backgroundColor: "#f4f6f9",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
      maxWidth: "700px",
      margin: "0 auto"
    },
    title: {
      color: "#c0392b",
      marginBottom: "30px"
    },
    label: {
      display: "block",
      marginBottom: "6px",
      color: "#2c3e50",
      fontWeight: "bold"
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "6px",
      border: "1px solid #dcdcdc",
      fontSize: "14px"
    },
    buttonPrimary: {
      backgroundColor: "#c0392b",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "6px",
      cursor: "pointer",
      marginRight: "10px"
    },
    buttonSecondary: {
      backgroundColor: "#7f8c8d",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "6px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Crear Nuevo Cliente</h1>

        <form onSubmit={handleSubmit}>

          <label style={styles.label}>Nombre</label>
          <input
            style={styles.input}
            type="text"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            required
          />

          <label style={styles.label}>Apellido</label>
          <input
            style={styles.input}
            type="text"
            value={formData.apellido}
            onChange={(e) =>
              setFormData({ ...formData, apellido: e.target.value })
            }
            required
          />

          <label style={styles.label}>Correo electrónico</label>
          <input
            style={styles.input}
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <label style={styles.label}>Teléfono</label>
          <input
            style={styles.input}
            type="text"
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
            required
          />

          <label style={styles.label}>Dirección</label>
          <input
            style={styles.input}
            type="text"
            value={formData.direccion}
            onChange={(e) =>
              setFormData({ ...formData, direccion: e.target.value })
            }
            required
          />

          <label style={styles.label}>Edad</label>
          <input
            style={styles.input}
            type="number"
            value={formData.edad}
            onChange={(e) =>
              setFormData({ ...formData, edad: e.target.value })
            }
            required
          />

          <label style={styles.label}>Estado</label>
          <select
            style={styles.input}
            value={formData.activo}
            onChange={(e) =>
              setFormData({ ...formData, activo: e.target.value === "true" })
            }
          >
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>

          <button type="submit" style={styles.buttonPrimary}>
            Guardar cliente
          </button>

          <button
            type="button"
            style={styles.buttonSecondary}
            onClick={() => navigate("/clientes")}
          >
            Cancelar
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateClientePage;
