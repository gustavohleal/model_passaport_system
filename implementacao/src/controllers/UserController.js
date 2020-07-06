const db = require('../database/db');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const { name, email, passwd, cpf, rg, address, phone, birthday } = req.body;

         passwd = crypto.createHash('sha256').update(passwd).digest('hex');
        console.log(passwd)
    
        await connection('ongs').insert({
            id,
            name,
            email,
            passwd,
            cpf,
            rg,
            address,
            phone,
            birthday,
        })
        
        return res.json({ id });
    },

    async index(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    }
}

