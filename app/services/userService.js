const User = require("../../models/user");

class UserService {
    static async obtenerUsuarios() {
        try {
            return await User.findAll();
        } catch (e) {
            throw new Error("Error al obtener usuarios");
        }
    }

    static async crearUsuarios(nombre, correo, contraseña) {
        try {
            return await User.create({ nombre, correo, contraseña });
        } catch (e) {
            throw new Error("Error al crear usuario");
        }
    }
}

module.exports = UserService;
