const express = require("express");
const app = express();
const dotenv=require("dotenv");
const userRouter = require('./app/routers/userRouter');


app.use(express.json());
dotenv.config();
app.use("/api", userRouter)

try {
    const userRouter = require("./app/routers/userRouter");
    app.use("/api", userRouter);
} catch (error) {
    console.error("Error al cargar userRouter:", error);
}


// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo`);
});
