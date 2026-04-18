export default function AgendamentosPage() {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Agendamentos</h1>
                <p className="text-sm text-gray-500 mt-1">Agendamentos do dia</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500">Nenhum agendamento para hoje.</p>
            </div>
        </div>
    )
}