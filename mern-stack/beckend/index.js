import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import siswaRouter from "./routes/siswaRoute.js";
dotenv.config();

const app = express();
/**
 * membuat middleware
 * membuat RESTAPI dapat diakses oleh frontend
 * agar dapat menerima data dalam format JSON
 */
app.use(express.json());
app.use(cors());
app.use('/api/siswa', siswaRouter);

app.listen(process.env.APP_PORT, ()=>{
    console.log(`Server up and running...`)
});