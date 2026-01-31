import api from '../api/axiosInstance';


export const getCliente = ()=> api.get('/clientes');
export const getClienteById = (id)=> api.get(`/clientes/${id}`);
export const createCliente = (clienteData)=> api.post('/clientes', clienteData);
export const updateCliente = (id, clienteData)=> api.put(`/clientes/${id}`, clienteData);
export const deleteCliente = (id)=> api.delete(`/clientes/${id}`);