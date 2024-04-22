'use client'
import React from 'react';
import Link from 'next/link';

export default function PaginaInicial() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <nav>
          <Link href={'/eventos'}>Eventos</Link><br></br>
          <Link href={'/clientes'}>Clientes</Link><br></br>
          <Link href={'/relatorios'}>Relatórios</Link>
          <Link href={'/api'}></Link>
        </nav>
      </div>
    </main>
  );
}