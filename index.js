import express from 'express'
import Usuario from './routes/usuario.js'
import dotenv from 'dotenv'
import { conexion } from './config/conexion.js';
const app = express();
dotenv.config();
conexion();

const port = 4000 || process.env.PORT;
app.listen( port, ()=>{
    console.log("funcionando en el puerto 4000");
} )

app.use( '/', Usuario)