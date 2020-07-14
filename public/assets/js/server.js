const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");
const path = require("path");
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static("public"));




////////////// Router///////////////////
require("../routes/routesAPI")(app);
require("../routes/routesHTML")(app);
// app.get("/api/characters/:character", function(req, res) {



// app.post("/api/notes", (req, res) => {
//     const noteObj = req.body;

// })


app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);

})

// app.delete("/api/notes/:id", (req, res) => {


// })