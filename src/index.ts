import express from "express";

const app = express();

app.set("port", 5000);

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(app.get("port"), () => {
  console.log(`Servidor iniciado en: ${app.get("port")}`);
});
