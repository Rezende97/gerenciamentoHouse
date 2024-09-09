const UserModel = require('../models/userModel');

const UserController = {

    getAll: (req, res) => {

        UserModel.getAll((err, users) => {

            if (err) return res.status(500).send(err);

            res.json(users);

        });
    },

    getById: (req, res) => {

        const id = req.params.id;

        UserModel.getById(id, (err, user) => {

            if (err) return res.status(500).send(err);

            if (user.length === 0) return res.status(404).send('User not found');

            res.json(user[0]);

        });
    },

    create: (req, res) => {

        const data = req.body;

        UserModel.create(data, (err, result) => {

            if (err) return res.status(500).send(err);

            res.status(201).json({ error: false, message: 'Create user success' });

        });
    },

    update: (req, res) => {

        const id = req.params.id;

        const data = req.body;

        UserModel.update(id, data, (err, result) => {

            if (err) return res.status(500).send(err);

            res.json({ error: false, message: 'update user success' });
        });
    },

    delete: (req, res) => {
        
        const id = req.params.id;

        UserModel.delete(id, (err, result) => {

            if (err) return res.status(500).send(err);

            res.json({ error: false, message: 'delete user success' });
        });
    },
};

module.exports = UserController;