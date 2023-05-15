const express = require('express');
const router = express.Router();
const Snippet = require('../models/Snippet');

// Create a new snippet
router.post('/new', async (req, res) => {
    const snippet = new Snippet(req.body);
    await snippet.save();
    res.status(200).send(snippet);
});

// Fetch all snippets
router.get('/', async (req, res) => {
    const snippets = await Snippet.find().populate('author');
    res.status(200).send(snippets);
});

// Fetch a single snippet
router.get('/:id', async (req, res) => {
    const snippet = await Snippet.findById(req.params.id).populate('author');
    if (snippet) {
        res.status(200).send(snippet);
    } else {
        res.status(404).send({ message: 'Snippet not found' });
    }
});

// Update a snippet
router.put('/:id', async (req, res) => {
    const snippet = await Snippet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (snippet) {
        res.status(200).send(snippet);
    } else {
        res.status(404).send({ message: 'Snippet not found' });
    }
});

// Delete a snippet
router.delete('/:id', async (req, res) => {
    const snippet = await Snippet.findByIdAndRemove(req.params.id);
    if (snippet) {
        res.status(200).send({ message: 'Snippet deleted' });
    } else {
        res.status(404).send({ message: 'Snippet not found' });
    }
});

module.exports = router;
