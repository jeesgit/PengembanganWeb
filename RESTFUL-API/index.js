const express = require('express');
const productRoutes = require('./routes/products');

const app = express();
app.use(express.json());    //middleware parsing json
app.use('/products', productRoutes);    //prefix endpoint

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server RESTful berjalan di http://localhost:${PORT}`);
});


