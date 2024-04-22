

import bodyParser from 'body-parser';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/eventos', async (req, res) => {
    const { data } = req.body;

    try {
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

app.post('@/app/clientes/page', async (req, res) => {
    const { nome, email } = req.body;

    try {
        const NovoCliente = await prisma.cliente.create({
            data: {
                nome,
                email
            }
        })
        res.status(201).json({ mensagem: 'Evento cadastrado com sucesso', evento: NovoCliente });
    } catch {
        res.status(500).json({ mensagem: 'Ocorreu um erro ao cadastrar o evento', erro: error.message });
    }
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});

export default app;