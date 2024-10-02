const express = require("express");
const app = express();
require('dotenv').config();
const hbs = require("hbs");
const port = process.env.PORT;
//servir contenido estatico
//handelbas
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Raul esta haciendo pruebas",
    title: "Curso de node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Raul esta haciendo pruebas",
    title: "Curso de node",
  });
});

app.get("/elements",(req,res)=>{
    res.render("elements",{
        name: "Raul esta haciendo pruebas",
        title: "Curso de node",
    })
})
 

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

app.get("/hola-mundo", (req, res) => {
  res.send({
    name: "pancho",
    edad: 30,
    puesto: "developer",
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send({
    name: "pancho",
    edad: 30,
    puesto: "developer",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port,()=>{
    console.log(`httplocalhost:port:${port}`)

});
