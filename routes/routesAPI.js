const db = require ("../db/db.json");
const fs = require ("fs");
const path = require ("path");

module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
      
        console.log(db);
            // console.log("should be data",JSON.parse(data));
            res.json(db);
    });
    // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    // app.post("/api/notes", (req, res) => {
//     const noteObj = req.body;
    app.post("/api/notes", (req, res) => {
        let dataArray = db;
/////////// recode here//////////////
            const userNote = JSON.parse(data);
            console.log(userNote);
            const userNewNote = req.body;
            console.log(userNewNote);
            userNote.push(userNewNote);

            fs.writeFileSync("../db/db.json", JSON.stringify(userNote), "utf8");
            res.json(userNote);
            // end recode/////////////////
    });

}
// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.




// })



// app.delete("/api/notes/:id", (req, res) => {


// })