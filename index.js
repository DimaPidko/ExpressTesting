import express from 'express';
// import mysql from 'mysql';
import cors from 'cors';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Server started. Port: ${PORT}`);
});