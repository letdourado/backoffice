'use client'

import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import appRoutes from "@/routes";

export default function Clientes() {
    const [data, setData] = useState({
       nome: '',
       email: '',
    });

    const valores = e => setData({...data, [e.target.id]: e.target.value})

    const enviarForm = (e) =>{
        e.preventDefault() //nao recarregar a pagina
        console.log(`Nome: ${data.nome}`)
        console.log(`Email: ${data.email}`)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h2>Cadastro de Clientes</h2>
                <form onSubmit={enviarForm}>
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
