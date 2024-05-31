import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { describe, beforeEach, afterEach, it, expect } from '@jest/globals'

import {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente
//   getCuentas,
//   getCuentaById,
//   createCuenta,
//   updateCuenta,
//   deleteCuenta,
//   getFacturas,
//   getFacturaById,
//   createFactura,
//   updateFactura,
//   deleteFactura,
//   getPagos,
//   getPagoById,
//   createPago,
//   updatePago,
//   deletePago,
//   getPlanes,
//   getPlanById,
//   createPlan,
//   updatePlan,
//   deletePlan,
//   getServicios,
//   getServicioById,
//   createServicio,
//   updateServicio,
//   deleteServicio,
//   getDispositivos,
//   getDispositivoById,
//   createDispositivo,
//   updateDispositivo,
//   deleteDispositivo,
//   getEmpleados,
//   getEmpleadoById,
//   createEmpleado,
//   updateEmpleado,
//   deleteEmpleado,
//   getNotificaciones,
//   getNotificacionById,
//   createNotificacion,
//   updateNotificacion,
//   deleteNotificacion,
//   getTickets,
//   getTicketById,
//   createTicket,
//   updateTicket,
//   deleteTicket,
//   getRegistrosUsoServicios,
//   getRegistroUsoServicioById,
//   createRegistroUsoServicio,
//   updateRegistroUsoServicio,
//   deleteRegistroUsoServicio
} from '../api/api'

describe('API Tests', () => {
  let mockAxios: MockAdapter

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
  })

  afterEach(() => {
    mockAxios.restore()
  })

  // Clientes
  it('should fetch clientes correctly', async () => {
    const mockClientes = [{ id: 1, nombre: 'Cliente 1', apellido: 'Apellido', direccion: 'Dirección', telefono: '123456789', correo: 'cliente1@example.com', contrasena: 'password', foto: 'photo.jpg', fecha_registro: '2024-05-18' }]
    mockAxios.onGet('/clientes').reply(200, mockClientes)
    const clientes = await getClientes()
    expect(clientes).toEqual(mockClientes)
  })

  it('should fetch cliente by ID correctly', async () => {
    const mockCliente = { id: 1, nombre: 'Cliente 1', apellido: 'Apellido', direccion: 'Dirección', telefono: '123456789', correo: 'cliente1@example.com', contrasena: 'password', foto: 'photo.jpg', fecha_registro: '2024-05-18' }
    const clienteId = '1'
    mockAxios.onGet(`/clientes/${clienteId}`).reply(200, mockCliente)
    const cliente = await getClienteById(clienteId)
    expect(cliente).toEqual(mockCliente)
  })

  it('should create a new cliente correctly', async () => {
    const clienteData = { nombre: 'Nuevo Cliente', apellido: 'Apellido', direccion: 'Dirección', telefono: '123456789', correo: 'nuevocliente@example.com', contrasena: 'password', foto: 'photo.jpg', fecha_registro: '2024-05-18' }
    const mockCliente = { id: 2, ...clienteData }
    mockAxios.onPost('/clientes', clienteData).reply(201, mockCliente)
    const cliente = await createCliente(clienteData)
    expect(cliente).toEqual(mockCliente)
  })

  it('should update an existing cliente correctly', async () => {
    const clienteId = '1'
    const clienteData = { nombre: 'Cliente Modificado', apellido: 'Apellido', direccion: 'Dirección Modificada', telefono: '987654321', correo: 'cliente1modificado@example.com', contrasena: 'password', foto: 'photo.jpg', fecha_registro: '2024-05-18' }
    const mockCliente = { id: 1, ...clienteData }
    mockAxios.onPut(`/clientes/${clienteId}`, clienteData).reply(200, mockCliente)
    const cliente = await updateCliente(clienteId, clienteData)
    expect(cliente).toEqual(mockCliente)
  })

  it('should delete an existing cliente correctly', async () => {
    const clienteId = '1'
    mockAxios.onDelete(`/clientes/${clienteId}`).reply(204)
    await deleteCliente(clienteId)
  })

  // Aquí continuarían las demás pruebas para todas las demás funciones de API
  // Cuentas, Facturas, Pagos, Planes, Servicios, Dispositivos, Empleados,
  // Notificaciones, Tickets de Soporte, Registros de Uso de Servicios, etc.
})
