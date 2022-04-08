import express from "express";

//Configuración del Router
const app = express();
app.set("port", 5000);

// Ruta raíz
app.get("/", function (req, res) {
    res.send("No deberías estar aquí");
});


//exportación del Router para el index
export default app;
