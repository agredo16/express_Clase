const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get('/user', UserController.obtenerUsuarios);
router.post('/login', UserController.login);
router.post('/user', UserController.register);
router.delete('/user/:id', UserController.eliminarUsuarios);
router.put('/user/:id', UserController.actualizarUsuarios);

module.exports = router;
