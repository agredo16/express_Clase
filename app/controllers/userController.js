const UserService = require("../services/userService");

class UserController {
    static async obtenerUsuarios(req, res) {
        try {
            const users = await UserService.obtenerUsuarios();
            res.json(users);
        } catch (e) {
            res.status(500).json({ error: "Error al obtener usuarios" });
        }
    }

    static async login(req, res) {
        try {
            // Implementar lógica de login aquí
        } catch (e) {
            res.status(500).json({ error: "Error en el inicio de sesión" });
        }
    }

    static async register(req, res) {
        try {
            const { nombre, correo, contraseña } = req.body;
            let user = await UserService.crearUsuarios(nombre, correo, contraseña);
            res.json(user);
        } catch (e) {
            res.status(500).json({ error: "Error en la solicitud de registro" });
        }
    }

    static async eliminarUsuarios(req, res) {
        try {
            // Implementar lógica de eliminación aquí
        } catch (e) {
            res.status(500).json({ error: "Error al eliminar usuario" });
        }
    }

    static async actualizarUsuarios(req, res) {
        try {
            // Implementar lógica de actualización aquí
        } catch (e) {
            res.status(500).json({ error: "Error al actualizar usuario" });
        }
    }
}

module.exports = UserController;
