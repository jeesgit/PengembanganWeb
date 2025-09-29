const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const produkRoutes = require('./routes/produkRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Routes Utama
app.use('/api/products', produkRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server berjalan di http://localhost:${PORT}`);
})