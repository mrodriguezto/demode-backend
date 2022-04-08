import app from "./routes/index";

app.listen(app.get("port"), () => {
  console.log(`Servidor iniciado en: ${app.get("port")}`);
});
