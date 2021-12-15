const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/book', (req, res) => {
    res.status(200).send({
        title: "The Idiot",
        author: "FD"
    })
});

app.post('/book/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const { author } = req.body;

    if (!title) {
        res.status(418).send({ message: 'We need a title'})
    }

    res.send({
        title: `${title} written by ${author} and ID of ${id}`,
    });
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);