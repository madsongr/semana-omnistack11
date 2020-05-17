const crypto = require('crypto');
const conn = require('../database/conn');

module.exports = {
    async select(req, res) {
        const ongs = await conn('ongs').select('*');
        return res.json(ongs);
    },

    async create(req, res) {

        const { name, email, whatsapp, city, uf } = req.body;
        const id = crypto.randomBytes(4).toString('HEX');

        try {
            await conn('ongs').insert({
                id, name, email, whatsapp, city, uf
            });
        } catch (error) {
            console.log(error);
        }

        return res.json({ id });
    },



}