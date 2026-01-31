import { getClienteById, updateCliente } from "../../services/clienteService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditClientePage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    direccion: "",
    estado: true
  });

  const fetchCliente = async () => {
    try {
      const response = await getClienteById(id);
      setFormData(response.data);
    } catch (error) {
      console.error("Error obteniendo cliente:", error);
    }
  };

  useEffect(() => {
    fetchCliente();
  }, [id]);

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
    <div>
      <h1>Editar Cliente</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={formData.apellido}
            onChange={(e) =>
              setFormData({ ...formData, apellido: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={formData.correo}
            onChange={(e) =>
              setFormData({ ...formData, correo: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Dirección:</label>
          <input
            type="text"
            value={formData.direccion}
            onChange={(e) =>
              setFormData({ ...formData, direccion: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Estado:</label>
          <select
            value={formData.estado}
            onChange={(e) =>
              setFormData({ ...formData, estado: e.target.value === "true" })
            }
          >
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </div>

        <br />

        <button type="submit">Actualizar Cliente</button>

        <button type="button" onClick={() => navigate("/clientes")}>
          Cancelar
        </button>

      </form>
    </div>
  );
};

export default EditClientePage;