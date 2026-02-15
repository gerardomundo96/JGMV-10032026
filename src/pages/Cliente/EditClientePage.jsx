import { getClienteById, updateCliente } from "../../services/clienteService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditClientePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    edad: "",
    activo: true,
  });

  const fetchCliente = async () => {
    try {
      const { data } = await getClienteById(id);
      setFormData(data);
    } catch (error) {
      console.error("Error obteniendo cliente:", error);
    }
  };

  useEffect(() => {
    fetchCliente();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "activo" ? value === "true" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCliente(id, formData);
      navigate("/clientes");
    } catch (error) {
      console.error("Error actualizando cliente:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Editar Cliente</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Edad</label>
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Activo</label>
          <select
            name="activo"
            value={formData.activo}
            onChange={handleChange}
          >
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </div>

        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.primaryButton}>
            Actualizar
          </button>

          <button
            type="button"
            style={styles.secondaryButton}
            onClick={() => navigate("/clientes")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "95%",
    maxWidth: "600px",
    margin: "40px auto",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#c40000",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  primaryButton: {
    backgroundColor: "#c40000",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "white",
    color: "#c40000",
    border: "2px solid #c40000",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default EditClientePage;
