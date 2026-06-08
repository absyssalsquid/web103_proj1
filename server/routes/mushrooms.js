import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import mushroomData from '../data/mushrooms.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)

const router = express.Router()

router.get('/', (req, res) => {~
  res.status(200).json(mushroomData)
})

router.get('/:mushroomId', (req, res) => {
  const index = Number(req.params.mushroomId)

  if (index < 0 || index >= mushroomData.length) {
    res.status(404).json({ error: 'Mushroom not found' })
    return;
  }

  res.status(200).json(mushroomData[index])
})

router.get('/view/:mushroomId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/mushroom.html'))
})

export default router
