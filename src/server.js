const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const router = require('./network/routes');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
