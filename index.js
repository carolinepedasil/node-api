const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", function(request, response) {
    response.send("Dasa Educa - Artigos");
});

const router = require("./routes/artigos.routes");
router(app);

app.listen(port, function() {
    console.log("Ouvindo a porta ", + port);
});

/*
app.post("/", function(request, response) {
    console.log(request.body);
    response.send("Dasa Educa - Post");
});

app.put("/", function(request, response) {
    // mensagem e titulo
    console.log(request.body.mensagem, request.params);
    response.send("Dasa Educa - Put");
});

app.delete("/", function(request, response) {
    response.send("Dasa Educa - Delete");
});

app.delete("/:id", function(request, response) {
    response.send("Dasa Educa - Delete");
});
*/