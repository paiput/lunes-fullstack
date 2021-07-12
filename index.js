const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'anda' });
});

app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});