export default function HomePage() {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-500 mt-1">Visão geral do dia na barbearia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">Agendamentos hoje</p>
                    <p className="text-3xl font-semibold text-gray-900 mt-1">0</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">Serviços cadastrados</p>
                    <p className="text-3xl font-semibold text-gray-900 mt-1">0</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-500">Barbeiros ativos</p>
                    <p className="text-3xl font-semibold text-gray-900 mt-1">0</p>
                </div>
            </div>
        </div>
    )
}