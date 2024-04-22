'use client'
import React from 'react';
import Eventos from "@/app/eventos/page";
import Clientes from "@/app/clientes/page";
import Relatorios from "@/app/relatorios/page";
import PaginaInicial from "@/app/page";
import { Route, Router, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Router>
            <PaginaInicial />
            <Routes>
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/relatorios" element={<Relatorios />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;