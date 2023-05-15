const mongoose = require('mongoose');

const SnippetSchema = new mongoose.Schema({
    code: String,
    language: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Snippet', SnippetSchema);
