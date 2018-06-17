var mongoose = require('mongoose');
require('mongoose-type-url');

// Schema constructor
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

    headline: {
        type: String,
        unique: true,
        trim: true
    },

    summary: {
        type: String
    },

    byline: {
        type: String
    },

    url: {
        type: mongoose.SchemaTypes.Url
    },

    isSaved: {
        type: Boolean,
        default: false
    },

    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;