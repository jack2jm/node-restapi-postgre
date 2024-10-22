const express = require('express');
const studentsRoutes = require('./src/students/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/students', studentsRoutes);

app.get('/', (req, res) => {
            res.send('Hello World!');
});

app.listen(port, () => {
            console.log(`Server running on port ${port}`);
});