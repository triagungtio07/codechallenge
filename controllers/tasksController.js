const db = require("../models");

class TasksController {
  async get(req, res) {
    const data = await db.tasks.findAll({
      attributes: ["id", "users_id", "description", "status"],
    });
    res.json(data);
  }
  async post(req, res) {
    const user = req.body["users_id"];
    const description = req.body["description"];

    await db.tasks.create({
      users_id: user,
      description: description,
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send("sukses insert data tugas baru");
  }
  async put(req, res) {
    const description = req.body["description"];
    const status = req.body["status"];
    const id = req.body.id;
    await db.tasks.update(
      {
        description: description,
        status: status,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.send(`succes update id ${id}`);
  }
  async delete(req, res) {
    const id = req.query.id;
    await db.tasks.destroy({ where: { id: id } });
    res.send(`succes delete data from tasks with id ${id}`);
  }
}

module.exports = Object.freeze(new TasksController());
