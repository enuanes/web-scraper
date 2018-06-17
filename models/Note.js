var mongoose = require('mongoose');

// Schema constructor
var Schema = mongoose.Schema;

// Create a NoteSchema object
var NoteSchema = new Schema({
    comment: String
});

var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;