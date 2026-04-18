import Link from 'next/link'

export default function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
            <div className="mb-8">
                <h2 className="text-xl font-semibold">BarberFlow</h2>
            </div>

            <nav className="flex flex-col gap-2">
                <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Dashboard
                </Link>
                <Link href="/servicos" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Serviços
                </Link>
                <Link href="/barbeiros" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Barbeiros
                </Link>
                <Link href="/agendamentos" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Agendamentos
                </Link>
            </nav>
        </aside>
    )
}