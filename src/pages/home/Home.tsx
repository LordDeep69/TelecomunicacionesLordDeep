import React, { useState, useEffect, ChangeEvent } from 'react'
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Button, Box, Container, TextField } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { getClientes, getCuentas, getFacturas, getPagos, getPlanes, getServicios, getDispositivos, getEmpleados, getNotificaciones, getTickets, getRegistrosUsoServicios, createCliente, updateCliente, deleteCliente } from '../../api/api' // Importa tus funciones de API

type DataType = Record<string, unknown>

const Home: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<string>('clientes')
  const [data, setData] = useState<DataType[]>([])
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [editingRow, setEditingRow] = useState<number | null>(null)
  const [newRow, setNewRow] = useState<DataType | null>(null)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      await handleEntityClick(selectedEntity)
    }
    void fetchData()
  }, [selectedEntity])

  const handleEntityClick = async (entity: string): Promise<void> => {
    setSelectedEntity(entity)
    let fetchData: DataType[] = []
    try {
      switch (entity) {
        case 'clientes':
          fetchData = await getClientes()
          break
        case 'cuentas':
          fetchData = await getCuentas()
          break
        case 'facturas':
          fetchData = await getFacturas()
          break
        case 'pagos':
          fetchData = await getPagos()
          break
        case 'planes':
          fetchData = await getPlanes()
          break
        case 'servicios':
          fetchData = await getServicios()
          break
        case 'dispositivos':
          fetchData = await getDispositivos()
          break
        case 'empleados':
          fetchData = await getEmpleados()
          break
        case 'notificaciones':
          fetchData = await getNotificaciones()
          break
        case 'tickets':
          fetchData = await getTickets()
          break
        case 'registros-uso-servicios':
          fetchData = await getRegistrosUsoServicios()
          break
        default:
          fetchData = []
      }
    } catch (error) {
      console.error(`Error fetching data for ${entity}:`, error)
    }
    setData(fetchData)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string, index: number) => {
    const updatedData = [...data]
    updatedData[index] = { ...updatedData[index], [key]: e.target.value }
    setData(updatedData)
  }

  const handleNewRowChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
    if (newRow) {
      setNewRow({ ...newRow, [key]: e.target.value })
    } else {
      setNewRow({ [key]: e.target.value })
    }
  }

  const handleEdit = (index: number) => {
    setEditingRow(index)
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteCliente(id)
      setData(data.filter(item => item.id !== id))
    } catch (error) {
      console.error(`Error deleting data for id ${id}:`, error)
    }
  }

  const handleSave = async (index: number) => {
    const updatedRow = data[index]
    try {
      await updateCliente(updatedRow.id, updatedRow)
      setEditingRow(null)
    } catch (error) {
      console.error(`Error updating data for id ${updatedRow.id}:`, error)
    }
  }

  const handleAddNew = async () => {
    if (newRow) {
      try {
        const addedRow = await createCliente(newRow)
        setData([...data, addedRow])
        setNewRow(null)
      } catch (error) {
        console.error('Error creating new data:', error)
      }
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => { setDrawerOpen(true) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Telecomunicaciones
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
        <List>
          {['clientes', 'cuentas', 'facturas', 'pagos', 'planes', 'servicios', 'dispositivos', 'empleados', 'notificaciones', 'tickets', 'registros-uso-servicios'].map((entity) => (
            <ListItem button key={entity} onClick={async () => { await handleEntityClick(entity) }}>
              <ListItemText primary={entity.charAt(0).toUpperCase() + entity.slice(1).replace('-', ' ')} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            {selectedEntity.charAt(0).toUpperCase() + selectedEntity.slice(1).replace('-', ' ')}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                {data.length > 0 && Object.keys(data[0]).map((key) => (
                  <TableCell key={key}>{key}</TableCell>
                ))}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {Object.keys(row).map((key) => (
                    <TableCell key={key}>
                      {editingRow === index ? (
                        <TextField
                          value={String(row[key])}
                          onChange={(e) => handleInputChange(e, key, index)}
                          fullWidth
                        />
                      ) : (
                        String(row[key])
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    {editingRow === index ? (
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
                        <Button variant="contained" color="primary" onClick={() => handleSave(index)}>Save</Button>
                        <Button variant="contained" color="secondary" onClick={() => setEditingRow(null)}>Cancel</Button>
                      </Box>
                    ) : (
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
                        <Button variant="contained" color="primary" onClick={() => handleEdit(index)}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(row.id)}>Delete</Button>
                      </Box>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {newRow && (
                <TableRow>
                  {Object.keys(data[0] || {}).map((key) => (
                    <TableCell key={key}>
                      <TextField
                        value={newRow[key] || ''}
                        onChange={(e) => handleNewRowChange(e, key)}
                        fullWidth
                      />
                    </TableCell>
                  ))}
                  <TableCell>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
                      <Button variant="contained" color="primary" onClick={handleAddNew}>Save</Button>
                      <Button variant="contained" color="secondary" onClick={() => setNewRow(null)}>Cancel</Button>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => setNewRow({})}>Add New</Button>
        </Container>
      </Box>
    </Box>
  )
}

export default Home








































