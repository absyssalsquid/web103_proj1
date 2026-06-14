import {pool} from '../database.js'
import './dotenv.js'
import giftData from '../data/mushrooms.js'

async function createMushroomsTable() {
    const createTableQuery = `
        DROP TABLE IF EXISTS gifts;
        DROP TABLE IF EXISTS mushrooms;

        CREATE TABLE IF NOT EXISTS mushrooms (
            id SERIAL PRIMARY KEY,
            scientific_name text[] NOT NULL,
            common_name text[] NOT NULL,
            image_url text NOT NULL,
            edibility text NOT NULL,
            color_code VARCHAR(10) NOT NULL
        )
    `
    try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 mushrooms table created successfully')
    } 
    catch (err) {
    console.error('Error creating mushrooms table:', err)
    }
}

const seedMushroomsTable = async () => {
    await createMushroomsTable()
    giftData.forEach((mushroom, idx) => {
        const insertQuery = {
            text: 'INSERT INTO mushrooms (scientific_name, common_name, image_url, edibility, color_code) VALUES ($1, $2, $3, $4, $5)'
        }
        const values = [
            mushroom.scientific_name, 
            mushroom.common_name,
            mushroom.image_url,
            mushroom.edibility,
            mushroom.color_code
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting mushroom', err)
                return
            }

            console.log(`✅ ${mushroom.common_name[0]} added successfully`)
        })
    })
}

seedMushroomsTable()