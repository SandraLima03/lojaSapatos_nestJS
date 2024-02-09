/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ProdutoSchema = new mongoose.Schema({
    produto: String,
    cor: String,
    tamanho: String,
    valor: Number,
    disponivel: Boolean
    
})