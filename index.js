const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ message: 'HOME' }));

app.listen(3000, () => console.log('APP running on port 3000'));
