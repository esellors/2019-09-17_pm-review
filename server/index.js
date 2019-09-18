const express = require('express');
const app = express();
const pc = require('./controller');
const PORT = 8000;

app.get('/api/puppers', pc.getPuppers);

app.listen(PORT, () => console.log(`LISTENING ON ${PORT}`));