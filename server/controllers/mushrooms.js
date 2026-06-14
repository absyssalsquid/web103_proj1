import { pool } from '../database.js'

const getMushrooms = async (req, res) => {
    // Select all mushrooms from the database and return as JSON
    const query = `SELECT * FROM mushrooms ORDER BY id ASC`
    try {
        const { rows } = await pool.query(query)
        res.status(200).json(rows)
    } catch (err) {
        console.error('Error fetching mushrooms:', err)
        res.status(409).json({ error: err.message })
    }
}

const getMushroomById = async (req, res) => {
    const id  = req.params.mushroomId;
    console.log('Fetching mushroom with ID:', id);
    const query = `SELECT * FROM mushrooms WHERE id = $1`
    try {
        const { rows } = await pool.query(query, [id])
        if (rows.length === 0) {
            res.status(404).json({ error: 'Mushroom not found' })
            return
        }
        res.status(200).json(rows[0])
    } catch (err) {
        console.error('Error fetching mushroom by ID:', err)
        res.status(409).json({ error: err.message })
    }
}

export { getMushrooms, getMushroomById }