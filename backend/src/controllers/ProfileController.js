const conn = require('../database/conn');

module.exports = {

    async select(req, res) {

        const ong_ig = req.headers.authorization;

        const incidents = await conn('incidents').where('ong_id', ong_ig).select('*');
        
        return res.json({ incidents });
    },
}