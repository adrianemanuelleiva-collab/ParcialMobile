const express = require('express')
const cors = require('cors')
require('dotenv').config()

const juegosRoutes = require('./routes/juegosRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', juegosRoutes)
console.log('Rutas cargadas')

app.get('/', (req, res) => {
  res.json({ mensaje: 'El backend funciona' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})

module.exports = app