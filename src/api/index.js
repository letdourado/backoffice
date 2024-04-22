'use client'
import bodyParser from 'body-parser';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('@/app/eventos/page', async (req, res) => {
    const { nome, data, local, descricao } = req.body;

    try{
        const NovoEvento = await prisma.evento.create({
            data: {
                nome,
                data,
                local,
                descricao
            }   
        })
        res.status(201).json({ mensagem: 'Evento cadastrado com sucesso', evento: NovoEvento });
    } catch {
        res.status(500).json({ mensagem: 'Ocorreu um erro ao cadastrar o evento', erro: error.message });
    }
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});

export default app;