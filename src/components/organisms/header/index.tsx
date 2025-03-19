"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md p-7 flex justify-between items-center">
            <Link href="/">
                <Image
                    alt="UR - Ursulla Rocha"
                    objectFit="contain"
                    width={400}
                    height={200}
                    src={"/header-logo.png"}
                />
            </Link>
            <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
                &#9776;
            </button>
            <nav
                className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex md:space-x-4 p-4 md:p-0 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0">
                    {["INÍCIO", "PRODUTOS", "CONTATO"].map((item, index) => (
                        <li
                            key={index}
                            className="text-[22px] text-[#8b7758] flex items-center group relative"
                        >
                            <Link
                                href={
                                    item === "INÍCIO"
                                        ? "/"
                                        : item === "PRODUTOS"
                                            ? "/reset"
                                            : `https://api.whatsapp.com/send?phone=5521986336699`
                                }
                                target={item === "CONTATO" ? "_blank" : "_self"}
                                className="relative"
                            >
                                {item}
                                <span
                                    className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#b58e5c] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                            </Link>
                            {index < 2 && (
                                <span className="hidden md:inline-block mx-10">|</span>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
