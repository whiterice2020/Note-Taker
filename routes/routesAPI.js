const db = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const { v1: uuidv1 } = require("uuid");


module.exports = function (app) {
    app.get("/api/notes", (req, res) => {

        console.log(db);
        // console.log("should be data",JSON.parse(data));
        res.json(db);
    });

    // * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
    app.post("/api/notes", (req, res) => {
        let dataArray = db;
        console.log(dataArray);
        const userNewNote = req.body;
        console.log(userNewNote);
        userNewNote.id = uuidv1();
        console.log(userNewNote.id);
        dataArray.push(userNewNote);
        fs.writeFileSync("db/db.json", JSON.stringify(dataArray), "utf8");
        res.json(dataArray);
    });

}

//    This section will delete the notes by the note id
// app.delete("/api/notes/:id", (req, res) => {
//     let dataArray = db;
//     let noteData = JSON.parse(fs.readFileSync("/db/db.json", "utf8"));
//     const deleteNotes = noteData.filter( function (usrNote) {
//       return usrNote.id !== req.params.id;
//     });
//     fs.writeFileSync("/db/db.json", JSON.stringify(deleteNotes));
//     res.json(deleteNotes)
//   });


app.delete("api/notes/:id", (req, res) => {
    // var db = req.db;
    Post.remove({
      _id: req.params.id
    }, function(err, post){
      if (err)
        res.send(err)
      res.send({
        success: true
      })
    })
  })