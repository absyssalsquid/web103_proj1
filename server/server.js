import express from 'express'
import mushroomsRouter from './routes/mushrooms.js'

const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/styles', express.static('./public/styles'))

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Mushroom Friend API</h1>')
})
app.use('/mushrooms', mushroomsRouter)

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})