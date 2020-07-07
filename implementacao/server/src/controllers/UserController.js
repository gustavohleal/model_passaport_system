const db = require('../database/db');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const { name, email, passwd, cpf, rg, address, cep, phone, birthday } = req.body;

        //const passwdHash = crypto.createHash('sha256').update(passwd).digest('hex');

        try{
            await db('users').insert({
                name,
                email,
                passwd,
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
            
        return res.json( '200' );
    },

    async index(req, res) {
        const users = await db('users').select('*');
    
        return res.json(users);
    },

    async getUser(req, res) {
        const email = req.headers.authorization;
        console.log(email)
        const id = await db('users').where({'email': email}).first().select('id')
        //try{
        //    const id = await db('users').where('email', email).select('*');
        //} catch(e) {
        //    console.log("User not found");
        //    return res.json(e);
        //}
//
        return res.json(id);
    }

}

