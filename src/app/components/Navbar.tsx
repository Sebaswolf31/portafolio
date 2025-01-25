'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function getMenuClasses() {
        let menuClasses = [
            'md:flex',
            'md:items-center',
            'md:gap-6',
            'z-20'
        ];
        if (isOpen) {
            menuClasses.push(
                'flex',
                'absolute',
                'top-[60px]',
                'bg-emerald-50',
                'w-full',
                'left-0',
                'p-4',
                'gap-10',
                'flex-col',
            );
        } else {
            menuClasses.push('hidden');
        }
        return menuClasses.join(' ');
    }

    return (
        <nav className="bg-slate-50 text-gray-800 p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex items-center justify-between">
                <div className={getMenuClasses()}>
                    {/* <a href="https://resumenes-ia.markelramiro.com" className="mx-2 hover:text-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 font-semibold">
                        Resumenes IA
                    </a> */}
                    <Link href="#herramientas" className="mx-2 hover:text-gray-300">
                    Herramientas
                    </Link>
                    <Link href="#proyectos" className="mx-2 hover:text-gray-300">
                    Proyectos
                    </Link>
                    <Link href="#experiencia" className="mx-2 hover:text-gray-300">
                    Experiencia
                    </Link>
                    <a href="/MarkelRamiro_CV.pdf" download className="mx-2 text-blue-500 hover:text-gray-300">
                        CV
                    </a>

                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
