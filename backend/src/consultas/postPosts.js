const pool = require('../conector/pool');

const postPosts = async (req, res, next) => {
        const data = req.body;
        const agregarPost = async (req) => {
            const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
            const values = [data.titulo, data.url, data.descripcion, 0];
            const result = await pool.query(consulta, values);
            console.log("Post agregado");
            return res.status(200).json({message:'result' }).send();
        }
        agregarPost();
}

        


module.exports = postPosts;