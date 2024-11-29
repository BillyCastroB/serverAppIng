
import mongoose from "mongoose";

export const conexion = async () => {
    try {
        const conect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión exitosa a MongoDB:", conect.connection.host);
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error.message);
        process.exit(1);
    }
};
