import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    cip: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    condicion: {
        type: String,
        required: true,
        default: 'Ordinario',
        trim: true
    },
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    apellidos: {
        type: String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
});

// Exportando correctamente el modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;
