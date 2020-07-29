const express = require("express");
const nunjucks = require("nunjucks");
const routes  = require("./routes");
const methodOverride = require("method-override");


const server = express();


server.use(express.urlencoded({extended:true}));
server.use(express.static("public"));
server.use(methodOverride("_method"));
server.use(routes);

// o tipo de arquivo que é apontado
server.set("view engine", "njk");

//indica onde o nunjucks vai pegar o html
nunjucks.configure("views",{
    express: server,
    noCache:true
});

server.listen(5000);