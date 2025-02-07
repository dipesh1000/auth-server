const express = require('express');
const { authRoutes } = require('./routes/index');
const app = express();
const port = 5555;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth/', authRoutes);

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
