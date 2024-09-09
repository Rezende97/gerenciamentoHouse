const express        = require('express');
const router         = express.Router();

// controllers
const UserController = require('../controllers/userController');

// gerenciamento de usuario
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getById);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;