'use client'

import { useState } from "react";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

export default function Clientes() {
    const [data, setData] = useState({
       nome: '',
       email: '',
    });

    const valores = e => setData({...data, [e.target.id]: e.target.value})

    const cadastrarCliente = async (event) => {
        event.preventDefault();
        console.log(data)
        try {
            await axios.post('@/api/index', data);
            setData({
                nome: '',
                email: '',
            });
        } catch (error) {
            console.error('Erro ao cadastrar cliente', error);

        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h2>Cadastro de Clientes</h2>
                <form onSubmit={cadastrarCliente}>
                    <div className="mb-4">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" onChange={valores}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="local">E-mail:</label>
                        <input type="text" id="email" name="email" onChange={valores}/>
                    </div>
                    <button type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cadastrar</button>
                </form>

            

            </div>
        </main>
    );
}
