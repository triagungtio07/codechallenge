const db = require('../models')

class UserController {
    async get(req, res) {
        const data = await db.users.findAll();
        res.json(data);
    }
    async post(req, res) {
        const fullname = req.body['full_name'];
        await db.users.create({
            full_name: fullname,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        res.send("sukses insert data" + fullname)
    }
    async put(req, res) {
        const fullname = req.body['full_name'];
        const id = req.body.id;
        await db.users.update({
            full_name: fullname
        }, {
            where: {
                id: id
            }
        })
        res.send(`succes update id ${id} with new full_name ${fullname}`)
    }
    async delete(req, res) {
        const id = req.query.id
        await db.users.destroy({where: {id:id}})
        res.send(`succes delete data from users with id ${id}`)
    }
}

module.exports = Object.freeze(new UserController())