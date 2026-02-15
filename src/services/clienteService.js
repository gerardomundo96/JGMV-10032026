import api from '../api/axiosInstance';

export const getClientes = () => api.get('/cliente');

export const getClienteById = (id) => 
  api.get(`/cliente/${id}`);

export const createCliente = (clienteData) => 
  api.post('/cliente', clienteData);

export const updateCliente = (id, clienteData) => 
  api.put(`/cliente/${id}`, clienteData);

export const deleteCliente = (id) => 
  api.delete(`/cliente/${id}`);

