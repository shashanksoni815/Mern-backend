import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'A Joke 2',
            content: 'This is a joke 2'
        },
        {
            id: 3,
            title: 'A Joke 3',
            content: 'This is a joke 3'
        },
        {
            id: 4,
            title: 'A Joke 4',
            content: 'This is a joke 4'
        },
        {
            id: 5,
            title: 'A Joke 5',
            content: 'This is a joke 5'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});