const pool = require('../conector/pool');

const getPosts = async(req, res) => {
    const getData = async () => {
        const result = await pool.query("SELECT * FROM posts order by id DESC LIMIT all")
        return res.status(200).send(result.rows)
    }
getData()  
} 

module.exports = getPosts;