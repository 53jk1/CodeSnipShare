const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const snippetRoutes = require('./routes/snippets');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/codesnipshare', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/snippets', snippetRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
