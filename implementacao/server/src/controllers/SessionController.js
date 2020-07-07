const db = require('../database/db');
const crypto = require('crypto');


module.exports = {
    async create(req, res) {
        const { email, passwd } = req.body;

        //const passwdHash = crypto.createHash('sha256').update(passwd).digest('hex');
        console.log(email, passwd)
        const user = await db('users')
            .where({
                'email': email,
                'passwd': passwd,
                })
            .select('*')
            .first();
        console.log(user)
        if(!user) {
            return res.status(400).json({ error: 'Usuário não encontrado'});
        }
        const {id, name} = user;
        return res.json({id, name});
    }
}