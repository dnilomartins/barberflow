'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    { href: '/',             label: 'Dashboard'    },
    { href: '/agendamentos', label: 'Agendamentos' },
    { href: '/servicos',     label: 'Serviços'     },
    { href: '/barbeiros',    label: 'Barbeiros'    },
]

export default function MobileSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const close = useCallback(() => setIsOpen(false), [])
    const open  = useCallback(() => setIsOpen(true),  [])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <>
            <header className="md:hidden flex items-center h-14 px-3 bg-white border-b border-gray-200">
                <button
                    type="button"
                    onClick={open}
                    aria-label="Abrir menu"
                    className="flex flex-col justify-center gap-[5px] w-11 h-11 rounded-lg shrink-0 touch-manipulation"
                >
                    <span className="w-5 h-0.5 bg-gray-700 rounded-full mx-auto" />
                    <span className="w-5 h-0.5 bg-gray-700 rounded-full mx-auto" />
                    <span className="w-5 h-0.5 bg-gray-700 rounded-full mx-auto" />
                </button>

                <Link
                    href="/"
                    className="flex-1 text-center font-semibold text-gray-900 text-lg tracking-tight pr-11"
                >
                    Barber<span className="text-blue-500">Flow</span>
                </Link>
            </header>

            {isOpen && (
                <div
                    aria-hidden="true"
                    onClick={close}
                    className="fixed inset-0 bg-black/50 md:hidden"
                    style={{ zIndex: 99998 }}
                />
            )}

            <aside
                aria-hidden={!isOpen}
                className="
                    fixed top-0 left-0 h-full w-72 max-w-[82vw]
                    bg-gray-950 flex flex-col
                    transition-transform duration-300 ease-in-out
                    md:hidden
                "
                style={{ zIndex: 99999, transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
            >
                <div className="h-14 flex items-center justify-between px-5 border-b border-gray-800">
                    <Link
                        href="/"
                        onClick={close}
                        className="font-semibold text-white text-lg tracking-tight"
                    >
                        Barber<span className="text-blue-400">Flow</span>
                    </Link>
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Fechar menu"
                        className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors touch-manipulation"
                    >
                        ✕
                    </button>
                </div>

                <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={close}
                                className={`
                                    flex items-center px-3 py-3 rounded-lg
                                    text-sm font-medium transition-colors
                                    ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }
                                `}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="px-5 py-4 border-t border-gray-800">
                    <p className="text-xs text-gray-600">BarberFlow v0.1</p>
                </div>
            </aside>
        </>
    )
}