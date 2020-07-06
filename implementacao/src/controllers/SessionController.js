const db = require('../database/db');
const crypto = require('crypto');


module.exports = {
    async create(req, res) {
        const { email, passwd } = req.body;

        const passwdHash = crypto.createHash('sha256').update(passwd).digest('hex');
        console.log(passwdHash)

        const user = await db('users')
            .where({
                'email': email,
                'passwd': passwdHash
                })
            .select('*')
            .first();

        if(!user) {
            return res.status(400).json({ error: 'No user found with this email'});
        }
        
        return res.json(user);
    }
}