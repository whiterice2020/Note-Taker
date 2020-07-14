const db = require ("../../../db/db.json");
const fs = require ("fs");
const path = require ("path");

module.exports = function (app) {
    // GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

    app.get("/api/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../../../db/db.json"))
        });
    
}

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.