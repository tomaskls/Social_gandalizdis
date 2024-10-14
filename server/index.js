import express from 'express';

const app = express();
const port = 5114;

app.get('/', (req, res) => {
    return res.send('HOME PAGE')
});

app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log('SERVER: http://localhost:' + port);
});