const express = require('express');
const router = express.Router();

//register
router.get('/register', (req, res) => {
  res.send('Worked!');
});

module.exports = router;
