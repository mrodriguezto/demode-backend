import app from "./base/app";
import "./base/database";

app.listen(app.get("port"), () => {
  console.log(`Servidor iniciado en: ${app.get("port")}`);
});
