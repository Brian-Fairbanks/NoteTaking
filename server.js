// =============================================================
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Express App
// =========================================
var app = express();
var PORT = process.env.PORT || 3000;

// Express app data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files
// this is required for the sendFiles to actually be able to access relative path files like CSS and JS
app.use(express.static(__dirname + '/public'));

// Notes
// =========================================
const notes = [];

// =============================================================
// Functions
// =============================================================


// =============================================================
// HTML Routes
// =============================================================

// Index
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname , 'public' , 'index.html'));
});

//Notes
app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname , 'public' , 'notes.html'));
});

// //ERROR
// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname , 'public' , 'index.html'));
// });

// =============================================================
// API Routes
// =============================================================

// note api get
app.get('/api/notes', function (req, res){
    return res.json(notes);
});

// note api post
app.post('/api/notes', function (req, res){
    var note = req.body;
    console.log(note);
    notes.push(note);
    return res.send('note has been saved');
})


// =============================================================
// Main Code
// =============================================================
app.listen(PORT, function (){
    console.log(`App is listening on http://localhost:${PORT}`)
})