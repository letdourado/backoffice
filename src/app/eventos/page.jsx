'use client'

import { useState } from "react";
import axios from "axios";

export default function Eventos() {
    const [data, setData] = useState({
        nome: '',
        data: '',
        local: '',
        descricao: ''
    })


    const handleChange = (mudanca) => {
        const { name, value } = mudanca.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const enviarForm = async (event) => {
        event.preventDefault();
        console.log(data)
        try {
            await axios.post('@/api/index', data);
            setData({
                nome: '',
                data: '',
                local: '',
                descricao: ''
            });
        } catch (error) {
            console.error('Erro ao cadastrar evento:', error);

        }
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h2>Cadastro de Evento</h2>
                <form onSubmit={enviarForm}>
                    <div className="mb-4">
                        <label htmlFor="nome">Nome do Evento:</label>
                        <input type="text" id="nome" name="nome" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="data">Data:</label>
                        <input type="text" id="data" name="data" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="local">Local:</label>
                        <input type="text" id="local" name="local" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea id="descricao" name="descricao" onChange={handleChange} ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cadastrar</button>
                </form>
            </div>
        </main>
    );

}
