import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import mushroomData from '../data/mushrooms.js'
import { getMushrooms, getMushroomById } from '../controllers/mushrooms.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname)

const router = express.Router()

router.get('/', getMushrooms);

router.get('/:mushroomId', getMushroomById);

router.get('/view/:mushroomId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/mushroom.html'))
})

export default router
