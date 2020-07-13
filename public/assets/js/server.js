const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");
const path = require("path");
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(express.static("public"));



///////////////// Routes//////////////////////
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../notes.html"));
});

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../../public/index.html"));
// });

//////////////// End of Routes///////////////

app.post("/api/notes", (req, res) => {
    const noteObj = req.body;
    // Example oof how to add an object to the body
    // noteObj.id = 3;


})


app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);

})

app.delete("/api/notes/:id", (req, res) => {


})