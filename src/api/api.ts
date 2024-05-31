import axios, { type AxiosError, type AxiosResponse } from 'axios'

// Configuración de Axios
const api = axios.create({
  baseURL: 'https://backendtelecomunicaciones.onrender.com/', // URL base de la API
  headers: {
    'Content-Type': 'application/json'
  }
})

// Tipos de datos
interface Cliente {

  nombre: string
  apellido: string
  direccion: string
  telefono: string
  correo: string
  contrasena: string
  foto: string
  fecha_registro: string
}

interface Cuenta {
  id: number
  id_cliente: number
  estado: string
  saldo: number
  fecha_creacion: string
}

interface Factura {
  id: number
  id_cuenta: number
  fecha_emision: string // Date in schema, using string here for simplicity
  fecha_vencimiento: string // Date in schema, using string here for simplicity
  total: number
}

interface Pago {
  id: number
  id_factura: number
  monto: number
  fecha_pago: string // Date in schema, using string here for simplicity
  metodo_pago: string
}

interface Plan {
  id: number
  nombre: string
  descripcion: string
  precio: number // Decimal in schema, using number here for simplicity
}

interface Servicio {
  id: number
  nombre: string
  tipo: string
  tarifa: number
}

interface Dispositivo {
  id: number
  cliente_id: number
  tipo_dispositivo: string
  modelo: string
  numero_serie: string
  estado: string
}

interface Empleado {
  id: number
  nombre: string
  apellido: string
  correo: string
  contrasena: string
  foto?: string // Optional
  puesto: string
  departamento: string
  estado_laboral: string
  fecha_registro: string // Date in schema, using string here for simplicity
}

interface Notificacion {
  id: number
  id_cliente: number
  mensaje: string
  fecha_hora: string // DateTime in schema, using string here for simplicity
  estado: 'enviada' | 'leida'
}

interface Ticket {
  id: number
  cliente_id: number
  descripcion_problema: string
  estado_ticket: string
  fecha_creacion: string // DateTime in schema, using string here for simplicity
  fecha_resolucion?: string // Optional DateTime in schema, using string here for simplicity
  empleado_id?: number // Optional
}

interface RegistroUsoServicio {
  id: number
  id_cliente: number
  id_servicio: number
  fecha_hora: string // DateTime in schema, using string here for simplicity
  cantidad_utilizada: number
}

// Interceptor para manejar respuestas
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response !== undefined) {
      console.error('Error de respuesta:', error.response.data)
    } else if (error.request !== undefined) {
      console.error('Error de solicitud:', error.request)
    } else {
      console.error('Error:', error.message)
    }
    return await Promise.reject(error)
  }
)

// Funciones para interactuar con la API

// Clientes
export const getClientes = async (): Promise<Cliente[]> => {
  const response = await api.get<Cliente[]>('/clientes')
  return response.data
}

export const getClienteById = async (id: string): Promise<Cliente> => {
  const response = await api.get<Cliente>(`/clientes/${id}`)
  return response.data
}

export const createCliente = async (cliente: Cliente): Promise<Cliente> => {
  const response = await api.post<Cliente>('/clientes', cliente)
  return response.data
}

export const updateCliente = async (id: string, cliente: Cliente): Promise<Cliente> => {
  const response = await api.put<Cliente>(`/clientes/${id}`, cliente)
  return response.data
}

export const deleteCliente = async (id: string): Promise<void> => {
  await api.delete(`/clientes/${id}`)
}

// Cuentas
export const getCuentas = async (): Promise<Cuenta[]> => {
  const response = await api.get<Cuenta[]>('/cuentas')
  return response.data
}

export const getCuentaById = async (id: string): Promise<Cuenta> => {
  const response = await api.get<Cuenta>(`/cuentas/${id}`)
  return response.data
}

export const createCuenta = async (cuenta: Cuenta): Promise<Cuenta> => {
  const response = await api.post<Cuenta>('/cuentas', cuenta)
  return response.data
}

export const updateCuenta = async (id: string, cuenta: Cuenta): Promise<Cuenta> => {
  const response = await api.put<Cuenta>(`/cuentas/${id}`, cuenta)
  return response.data
}

export const deleteCuenta = async (id: string): Promise<void> => {
  await api.delete(`/cuentas/${id}`)
}

// Facturas
export const getFacturas = async (): Promise<Factura[]> => {
  const response = await api.get<Factura[]>('/facturas')
  return response.data
}

export const getFacturaById = async (id: string): Promise<Factura> => {
  const response = await api.get<Factura>(`/facturas/${id}`)
  return response.data
}

export const createFactura = async (factura: Factura): Promise<Factura> => {
  const response = await api.post<Factura>('/facturas', factura)
  return response.data
}

export const updateFactura = async (id: string, factura: Factura): Promise<Factura> => {
  const response = await api.put<Factura>(`/facturas/${id}`, factura)
  return response.data
}

export const deleteFactura = async (id: string): Promise<void> => {
  await api.delete(`/facturas/${id}`)
}

// Pagos
export const getPagos = async (): Promise<Pago[]> => {
  const response = await api.get<Pago[]>('/pagos')
  return response.data
}

export const getPagoById = async (id: string): Promise<Pago> => {
  const response = await api.get<Pago>(`/pagos/${id}`)
  return response.data
}

export const createPago = async (pago: Pago): Promise<Pago> => {
  const response = await api.post<Pago>('/pagos', pago)
  return response.data
}

export const updatePago = async (id: string, pago: Pago): Promise<Pago> => {
  const response = await api.put<Pago>(`/pagos/${id}`, pago)
  return response.data
}

export const deletePago = async (id: string): Promise<void> => {
  await api.delete(`/pagos/${id}`)
}

// Planes
export const getPlanes = async (): Promise<Plan[]> => {
  const response = await api.get<Plan[]>('/planes')
  return response.data
}

export const getPlanById = async (id: string): Promise<Plan> => {
  const response = await api.get<Plan>(`/planes/${id}`)
  return response.data
}

export const createPlan = async (plan: Plan): Promise<Plan> => {
  const response = await api.post<Plan>('/planes', plan)
  return response.data
}

export const updatePlan = async (id: string, plan: Plan): Promise<Plan> => {
  const response = await api.put<Plan>(`/planes/${id}`, plan)
  return response.data
}

export const deletePlan = async (id: string): Promise<void> => {
  await api.delete(`/planes/${id}`)
}

// Servicios
export const getServicios = async (): Promise<Servicio[]> => {
  const response = await api.get<Servicio[]>('/servicios')
  return response.data
}

export const getServicioById = async (id: string): Promise<Servicio> => {
  const response = await api.get<Servicio>(`/servicios/${id}`)
  return response.data
}

export const createServicio = async (servicio: Servicio): Promise<Servicio> => {
  const response = await api.post<Servicio>('/servicios', servicio)
  return response.data
}

export const updateServicio = async (id: string, servicio: Servicio): Promise<Servicio> => {
  const response = await api.put<Servicio>(`/servicios/${id}`, servicio)
  return response.data
}

export const deleteServicio = async (id: string): Promise<void> => {
  await api.delete(`/servicios/${id}`)
}

// Dispositivos
export const getDispositivos = async (): Promise<Dispositivo[]> => {
  const response = await api.get<Dispositivo[]>('/dispositivos')
  return response.data
}

export const getDispositivoById = async (id: string): Promise<Dispositivo> => {
  const response = await api.get<Dispositivo>(`/dispositivos/${id}`)
  return response.data
}

export const createDispositivo = async (dispositivo: Dispositivo): Promise<Dispositivo> => {
  const response = await api.post<Dispositivo>('/dispositivos', dispositivo)
  return response.data
}

export const updateDispositivo = async (id: string, dispositivo: Dispositivo): Promise<Dispositivo> => {
  const response = await api.put<Dispositivo>(`/dispositivos/${id}`, dispositivo)
  return response.data
}

export const deleteDispositivo = async (id: string): Promise<void> => {
  await api.delete(`/dispositivos/${id}`)
}

// Empleados
export const getEmpleados = async (): Promise<Empleado[]> => {
  const response = await api.get<Empleado[]>('/empleados')
  return response.data
}

export const getEmpleadoById = async (id: string): Promise<Empleado> => {
  const response = await api.get<Empleado>(`/empleados/${id}`)
  return response.data
}

export const createEmpleado = async (empleado: Empleado): Promise<Empleado> => {
  const response = await api.post<Empleado>('/empleados', empleado)
  return response.data
}

export const updateEmpleado = async (id: string, empleado: Empleado): Promise<Empleado> => {
  const response = await api.put<Empleado>(`/empleados/${id}`, empleado)
  return response.data
}

export const deleteEmpleado = async (id: string): Promise<void> => {
  await api.delete(`/empleados/${id}`)
}

// Notificaciones
export const getNotificaciones = async (): Promise<Notificacion[]> => {
  const response = await api.get<Notificacion[]>('/notificaciones')
  return response.data
}

export const getNotificacionById = async (id: string): Promise<Notificacion> => {
  const response = await api.get<Notificacion>(`/notificaciones/${id}`)
  return response.data
}

export const createNotificacion = async (notificacion: Notificacion): Promise<Notificacion> => {
  const response = await api.post<Notificacion>('/notificaciones', notificacion)
  return response.data
}

export const updateNotificacion = async (id: string, notificacion: Notificacion): Promise<Notificacion> => {
  const response = await api.put<Notificacion>(`/notificaciones/${id}`, notificacion)
  return response.data
}

export const deleteNotificacion = async (id: string): Promise<void> => {
  await api.delete(`/notificaciones/${id}`)
}

// Tickets de Soporte
export const getTickets = async (): Promise<Ticket[]> => {
  const response = await api.get<Ticket[]>('/tickets-soporte')
  return response.data
}

export const getTicketById = async (id: string): Promise<Ticket> => {
  const response = await api.get<Ticket>(`/tickets-soporte/${id}`)
  return response.data
}

export const createTicket = async (ticket: Ticket): Promise<Ticket> => {
  const response = await api.post<Ticket>('/tickets-soporte', ticket)
  return response.data
}

export const updateTicket = async (id: string, ticket: Ticket): Promise<Ticket> => {
  const response = await api.put<Ticket>(`/tickets-soporte/${id}`, ticket)
  return response.data
}

export const deleteTicket = async (id: string): Promise<void> => {
  await api.delete(`/tickets-soporte/${id}`)
}

// Registro de Uso de Servicios
export const getRegistrosUsoServicios = async (): Promise<RegistroUsoServicio[]> => {
  const response = await api.get<RegistroUsoServicio[]>('/registros-uso-servicios')
  return response.data
}

export const getRegistroUsoServicioById = async (id: string): Promise<RegistroUsoServicio> => {
  const response = await api.get<RegistroUsoServicio>(`/registros-uso-servicios/${id}`)
  return response.data
}

export const createRegistroUsoServicio = async (registro: RegistroUsoServicio): Promise<RegistroUsoServicio> => {
  const response = await api.post<RegistroUsoServicio>('/registros-uso-servicios', registro)
  return response.data
}

export const updateRegistroUsoServicio = async (id: string, registro: RegistroUsoServicio): Promise<RegistroUsoServicio> => {
  const response = await api.put<RegistroUsoServicio>(`/registros-uso-servicios/${id}`, registro)
  return response.data
}

export const deleteRegistroUsoServicio = async (id: string): Promise<void> => {
  await api.delete(`/registros-uso-servicios/${id}`)
}

export default api
