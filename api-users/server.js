require("dotenv").config();

const mainRouter = require("./routes"); 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT; //berbeda dengan api-produk
const HOST = process.env.HOST; 

// Import Swagger untuk dokumentasi API
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const whitelist = process.env.CORS_ALLOW_LIST.split(",");
//konfigurasi opsi CORS
const corsOptions = {
  origin: function (origin, callback) {
    // Jika request tidak punya origin (misalnya curl/postman) atau origin ada dalam whitelist → izinkan
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      // Jika origin tidak ada dalam daftar → tolak dengan error
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200 // Untuk memastikan response preflight OPTIONS sukses di browser lama
};

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use(cors(corsOptions));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)
);

app.listen(PORT, ()=>{
    console.log(` Server running at ${HOST}:${PORT}`);
});