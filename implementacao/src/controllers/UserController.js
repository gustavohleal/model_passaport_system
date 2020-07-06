const db = require('../database/db');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const { name, email, passwd, cpf, rg, address, cep, phone, birthday } = req.body;

        const passwdHash = crypto.createHash('sha256').update(passwd).digest('hex');
        console.log(passwdHash)

        try{
            const id = await db('users').insert({
                name,
                email,
                passwd: passwdHash,
                cpf,
                rg,
                address,
                cep,
                phone,
                birthday,
            })
        } catch(e) {
            console.log(e)
            return res.json(e)
        }
            
        return res.json({ id });
    },

    async index(req, res) {
        const users = await db('users').select('*');
    
        return res.json(users);
    }

}

