'use client'
import React from 'react';
import Link from "next/link";
import {FaBug} from "react-icons/fa6";
import classnames from "classnames";
import {usePathname} from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();

    const links = [
        {label: "Dashboard", href: "/"},
        {label: "Issues", href: "/issues"},
        {label: "About", href: "/about"},
    ]
    return (
        <nav className="
            flex
            space-x-6
            border-b
            h-14
            items-center
            px-5"
        >
            <Link href="/">
                <FaBug size={18}/>
            </Link>
            <ul className="flex space-x-6">
                {
                    links.map(
                        link =>
                            <Link
                                key={link.label}
                                href={link.href}
                                className={
                                    classnames({
                                        'text-slate-900': link.href === pathname,
                                        'text-slate-500': link.href !== pathname,
                                        'hover:text-slate-800 transition-colors': true
                                    })
                                }
                            >
                                {link.label}
                            </Link>
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;