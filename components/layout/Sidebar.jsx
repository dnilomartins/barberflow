'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    { href: '/',             label: 'Dashboard'    },
    { href: '/agendamentos', label: 'Agendamentos' },
    { href: '/servicos',     label: 'Serviços'     },
    { href: '/barbeiros',    label: 'Barbeiros'    },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden md:flex flex-col w-64 min-h-screen bg-gray-950 border-r border-gray-800">
            <div className="h-16 flex items-center px-6 border-b border-gray-800">
                <Link href="/" className="text-white font-semibold text-lg tracking-tight">
                    Barber<span className="text-blue-400">Flow</span>
                </Link>
            </div>

            <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`
                                flex items-center px-3 py-2 rounded-lg
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

            <div className="px-6 py-4 border-t border-gray-800">
                <p className="text-xs text-gray-600">BarberFlow v0.1</p>
            </div>
        </aside>
    )
}