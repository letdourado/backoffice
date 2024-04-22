'use client'
import React from 'react';
import { Link } from 'react-router-dom';

export default function PaginaInicial() {
  return (
    <nav>
      <Link to="/eventos">Eventos</Link>
    </nav>
  );
}