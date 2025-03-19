"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Home, Info, Mail } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        {name: 'URSULLA', icon: <Home size={20}/>, href: '/'},
        {name: 'PRODUTOS', icon: <Info size={20}/>, href: '/reset'},
        {name: 'CONTATO', icon: <Mail size={20}/>, href: 'https://api.whatsapp.com/send?phone=5521986336699'}
    ];

    return (
        <header className="bg-white shadow-md p-7 flex justify-between items-center">
            <Link href="/" className='w-[75%] xl:w-full'>
                <Image
                    alt="UR - Ursulla Rocha"
                    objectFit="contain"
                    width={400}
                    height={200}
                    src={"/header-logo.png"}
                />
            </Link>
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md text-[#8b7758] hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8b7758] z-[40]"
            >
                <span className="sr-only">Open menu</span>
                {isOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
            <nav
                className={`block absolute md:static top-16 left-0 w-full md:w-auto md:flex md:space-x-4 p-4 md:p-0`}
            >
                <ul className="hidden lg:flex flex-col md:flex-row space-y-4 md:space-y-0">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="text-[22px] text-[#8b7758] flex items-center group relative"
                        >
                            <Link
                                href={item.href}
                                target={item.name === "CONTATO" ? "_blank" : "_self"}
                                className="relative"
                            >
                                {item.name}
                                <span
                                    className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#b58e5c] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                            </Link>
                            {index < 2 && (
                                <span className="hidden md:inline-block mx-10">|</span>
                            )}
                        </li>
                    ))}
                </ul>
                <div
                    ref={menuRef}
                    className={`${
                        isOpen ? 'translate-x-0' : 'translate-x-full hidden'
                    } fixed top-0 left-0 bottom-0 w-64 bg-[#f7f0e5] shadow-xl transform transition-transform duration-300 ease-in-out z-[40]`}
                >
                    <div className="pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center px-4 py-6 text-base font-bold text-[#8b7758] hover:text-gray-900 hover:bg-gray-50"
                            >
                                <span className="mr-3 ">{item.icon}</span>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;