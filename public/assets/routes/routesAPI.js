const db = require ("../../../db/db.json");
const fs = require ("fs");
const path = require ("path");

module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        fs.readFile("../../../db/db.json", "utf-8", (err, data) => {
            res.json(JSON.parse(data));
        })
    });
    // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    // app.post("/api/notes", (req, res) => {
//     const noteObj = req.body;
    app.post("/api/notes", (req, res) => {
        fs.readFile("../../../db/db.json", "utf-8";

            const userNote = JSON.parse(data);
            const userNewNote = req.body;

            userNote.push(userNewNote);

            fs.writeFileSync("../../../db/db.json", JSON.stringify(userNote), "utf8");
            res.json(userNote);
        );
    });

}
// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.




// })



// app.delete("/api/notes/:id", (req, res) => {


// })