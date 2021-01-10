const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config'); // to secure database username & password before push to github need this to require
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors()); 
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('Welocme Home');
});

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true } ,() => {
    console.log('connected to DB!');
});


// starting server
app.listen(3000, () => {
    console.log(`Server started on 3000`);
});